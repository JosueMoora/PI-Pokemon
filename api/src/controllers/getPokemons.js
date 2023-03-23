const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getAll = async () => {
  try {
    const api = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    const urls = await api.data.results?.map((p) => axios.get(p.url));
    const getAll = await Promise.all(urls);
    const result = getAll.map((pokemon) => {
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        hp: pokemon.data.stats[0].base_stat,
        attack: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        speed: pokemon.data.stats[5].base_stat,
        height: pokemon.data.height,
        weight: pokemon.data.weight,
        image: pokemon.data.sprites.other.home.front_default,
        types: pokemon.data.types.map((type) => type.type.name),
      };
    });
    const db = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (db.length) {
      return [...result, ...db];
    } else {
      return [...result];
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getByName = async (name) => {
  try {
    let fromDb = await Pokemon.findOne({
      where: {
        name: name,
      },
      include: {
        model: Type,
      },
    }); //
    if (fromDb) return fromDb;
    let pokeName = {};
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const res = await response.data;
    pokeName = {
      id: res.id,
      name: res.name,
      hp: res.stats[0].base_stat,
      attack: res.stats[1].base_stat,
      defense: res.stats[2].base_stat,
      speed: res.stats[5].base_stat,
      height: res.height,
      weight: res.weight,
      image: res.sprites.other["official-artwork"]["front_default"],
      type: res.types.map((t) => t.type.name),
    };
    return pokeName;
  } catch (error) {
    return "There are no matches getByName";
  }
};


const getById = async (id) => {
  try {
    const fromDb = await Pokemon.findByPk(id, {
            include: {
              model: Type,
              attributes: ["name"],
              through: {
                attributes: [],
              },
            },
          });
    if (fromDb) {
      return fromDb;
    } else {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      const result = response.data;
      return {
        id: result.id,
        name: result.name,
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
        speed: result.stats[5].base_stat,
        height: result.height,
        weight: result.weight,
        image: result.sprites.other.home.front_default,
        custom: false,
        types: result.types.map((type) => type.type.name),
      };
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getById,
  getByName,
  getAll,
};
