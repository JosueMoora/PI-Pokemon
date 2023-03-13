const axios = requiere("axios")
const {Pokemon, Type} = requiere('../db')

const getPokemons = async () => {
    try {
       const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
       const urls = await response.data.results?.map(pokemon => axios.get(pokemon.urls))
       const getAllPokemon = await Promise.all(urls)
       const result = getAllPokemon.map((pokemon)=>{
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
            types: pokemon.data.types.map((type) => type.type.name)
        
        }})
       return result
    } catch (error) {
        throw new Error ("cannot get all pokemons");  
    }
}