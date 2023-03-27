import { GET_POKEMONS, CREATE_POKEMON, GET_TYPES, FILTER_BY_TYPE, FILTER_BY_CREATED, ORDER_BY_ATTACK, ORDER_BY_NAME } from './actions-types'
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

export const createPokemon = (pokemon) =>{
    return async function (dispatch) {
        const result = await axios.post(`http://localhost:3001/pokemons/`,pokemon) 
        dispatch({type: CREATE_POKEMON, payload: result.data})
    }
}

export const filterByType = (payload) => dispatch => {
  return dispatch({
      type: FILTER_BY_TYPE,
      payload
  })
};

export const filterByCreated = (payload) => dispatch => {
  return dispatch({
      type: FILTER_BY_CREATED,
      payload
  })
};

export const orderByAttack = (payload) => dispatch => {
  return dispatch({
      type: ORDER_BY_ATTACK,
      payload
  })
};


export const orderByName = (payload) => dispatch => {
  return dispatch({
      type: ORDER_BY_NAME,
      payload
  })
};