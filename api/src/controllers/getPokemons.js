const axios = requiere("axios");
const { Pokemon, Type } = requiere("../db");

const getAll = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100"
    );
    const urls = await response.data.results?.map((pokemon) =>
      axios.get(pokemon.urls)
    );
    const getAllPokemon = await Promise.all(urls);
    const pokemonApi = getAllPokemon.map((pokemon) => {
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        image: pokemon.data.sprites.other["official-artwok"]["front_default"],
        hp: pokemon.data.stats[0].base_stat,
        attack: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        speed: pokemon.data.stats[5].base_stat,
        height: pokemon.data.height,
        weight: pokemon.data.weight,
        types: pokemon.data.types.map((type) => type.type.name),
      };
    });
    // return result;
    let result = await Pokemon.findAll({
      include: {
        model: type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      order: ["id"],
    });
    const pokemonDB = result?.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.Types.map((type) => type.name),
      };
    });
    return [...pokemonApi, ...pokemonDB];
  } catch (error) {
    throw new Error("cannot get all pokemons");
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
    });
    if (fromDb) return fromDb;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    const result = response.data;
    const fromApi = {
      id: result.id,
      name: result.name,
      image: result.sprites.other["official-artwok"]["front_default"],
      hp: result.stats[0].base_stat,
      attack: result.stats[1].base_stat,
      defense: result.stats[2].base_stat,
      speed: result.stats[5].base_stat,
      height: result.height,
      weight: result.weight,
      types: result.types.map((type) => type.type.name),
    };
    return fromApi;
  } catch (error) {
    return "No se encontró ningun pokemon con ese nombre";
  }
};

const getById = async (id) => {
  try {
    const fromDb = await Pokemon.findByPk(id, {
      include: {
        model: Type,
        as: "type",
      },
    });
    if (fromDb) return fromDb;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = response.data;
    const fromApi = {
      id: result.id,
      name: result.name,
      image: result.sprites.other["official-artwok"]["front_default"],
      hp: result.stats[0].base_stat,
      attack: result.stats[1].base_stat,
      defense: result.stats[2].base_stat,
      speed: result.stats[5].base_stat,
      height: result.height,
      weight: result.weight,
      types: result.types.map((type) => type.type.name)
    };

    return fromApi

  } catch (error) {
    return 'No se encontró ningun pokemon con ese id'
  }
};

module.exports = {
  getAll,
  getByName,
  getById,
};
