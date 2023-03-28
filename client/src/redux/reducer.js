import {
  GET_POKEMONS,
  GET_BY_NAME,
  GET_TYPES,
  FILTER_BY_CREATED, 
  FILTER_BY_TYPE,
  ORDER_BY_ATTACK, 
  ORDER_BY_NAME

} from "./actions-types";

const initialState = {
  pokemons: [],
  filtered: [],
  types: [],
  loader: false,
  error: {}
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS:
      return { ...state, 
        pokemons: payload,
        filtered: payload,
        loader: true
      };

    case GET_BY_NAME:
      return {
        ...state,
        pokemons: state.pokemons.filter(pokemon => pokemon.name === payload.name),
        loader: true
      }

    case GET_TYPES:
      return { ...state, types: payload };
    
      case FILTER_BY_TYPE:
        let filtered = state.filtered;
        let byType = filtered?.filter((pokemon) => pokemon.types.includes(payload) )
        if (payload === 'All') byType = filtered;
        return {
            ...state,
            pokemons: byType
        };
    case FILTER_BY_CREATED:
        let filtered2 = state.filtered;
        let byCreated = payload === 'db' ? filtered2.filter(pokemon => pokemon.id > 1010) : filtered2.filter(pokemon => pokemon.id <= 1010);
        if (payload === 'All') byCreated = filtered2;
        return {
            ...state,
            pokemons: byCreated
        };
    case ORDER_BY_NAME:
        const byName = payload === 'A-Z' ? state.pokemons.sort((a,b) => {
            if(a.name > b.name) return 1
            if(a.name < b.name) return -1
            return 0
        }) : state.pokemons.sort((a,b) => {
            if(a.name < b.name) return 1
            if(a.name > b.name) return -1
            return 0
        });
        return {
            ...state,
            pokemons: byName
        };
    case ORDER_BY_ATTACK:
        const byAttack = payload === 'min' ? state.pokemons.sort((a,b) => {
            return a.attack - b.attack
        }) : state.pokemons.sort((a,b) => {
            return b.attack - a.attack
        });
        return {
            ...state,
            pokemons: byAttack
        }

    default:
      return { ...state };
  }
};

export default rootReducer;
