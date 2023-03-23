import { GET_POKEMONS, GET_SORT, GET_TYPES } from "./actions-types";

const initialState = {
  pokemons: [],
  types: [],
  sorting: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS:
      return {...state, pokemons: payload}
    
    case GET_TYPES: 
      return {...state, types: payload}

    case GET_SORT:
      const sort = payload === 'asc' ? state.sorting.sort((a, b) => {
        if (a.name > b.name) return 1;

        if (a.name < b.name) return -1;

        return 0;
    }) : payload === 'desc' ? state.sorting.sort((a, b) => {
        if (a.name > b.name) return -1;

        if (a.name < b.name) return 1;

        return 0;
    }) : [...state.pokemons]
    return {
        ...state,
        sorting: sort
    }
    
    default:
      return {...state};
  }
};

export default rootReducer