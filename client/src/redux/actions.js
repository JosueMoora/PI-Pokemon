import { GET_POKEMONS, GET_POKEMON, CREATE_POKEMON, GET_BY_NAME, GET_TYPES, GET_SORT } from './actions-types'
import axios from 'axios'
export const getPokemons = () =>{
    return async function (dispatch) {
        const result = await axios.get("http://localhost:3001/pokemons/") 
        const pokemons = result.data
        dispatch({type: GET_POKEMONS, payload: pokemons })
    }
}
export function getTypes() {
    return (dispatch) => {
      return axios.get(`http://localhost:3001/types`)
        .then((response) => {
          dispatch({
            type: GET_TYPES,
            payload: response.data
          });
        }).catch((error) => console.log("Error on getTypes Action", error))
    };
  }
export const getPokemon = (id) =>{
    return async function (dispatch) {
        const result = await axios.get(`http://localhost:3001/pokemons/${id}`) 
        const pokemon = result.data
        dispatch({type: GET_POKEMON, payload: pokemon})
    }
}
export const getByName = (name) =>{
    return async function (dispatch) {
        const result = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
        const pokemon = result.data
        if (pokemon.name) dispatch({type: GET_BY_NAME, payload: pokemon})
        else dispatch({type: GET_BY_NAME, payload: {info: 'not found'}})
    }
}

export const createPokemon = (pokemon) =>{
    return async function (dispatch) {
        const result = await axios.post(`http://localhost:3001/pokemons/`,pokemon) 
        dispatch({type: CREATE_POKEMON, payload: result.data})
    }
}

export const getSort = (payload) => dispatch => {
    return dispatch({ type: GET_SORT, payload })
}