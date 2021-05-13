import {
  SEARCH_SONGS,
  SET_LOADING,
  CLEAR_SONGS,
  GET_SONG,
  GET_REPOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_SONGS:
      return {
        ...state,
        songs: action.payload,
        loading: false
      };
    case GET_SONG:
      return {
        ...state,
        song: action.payload,
        loading: false
      };
    case CLEAR_SONGS:
      return {
        ...state,
        songs: [],
        loading: false
      };
    case GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
