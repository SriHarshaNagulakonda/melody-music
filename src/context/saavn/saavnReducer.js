import {
  SEARCH_SONGS,
  SET_LOADING,
  CLEAR_SONGS,
  GET_SONG,
  GET_ALBUM_SONGS
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
        album_songs: [],
        songs: [],
        loading: false
      };
    case GET_ALBUM_SONGS: {
      return {
        ...state,
        album_songs: action.payload,
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
