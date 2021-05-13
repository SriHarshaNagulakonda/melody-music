import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './saavnContext';
import GithubReducer from './saavnReducer';
import {
  SEARCH_SONGS,
  SET_LOADING,
  CLEAR_SONGS,
  GET_SONG,
  GET_REPOS
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    songs: [],
    song: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Songs
  const searchSongs = async text => {
    setLoading();
    const res = await axios.get(
      `https://api-jio-saavn.herokuapp.com/result/?q=${text}`
    );

    dispatch({
      type: SEARCH_SONGS,
      payload: res.data
    });
  };

  // Get Song
  const getSong = async (songname,songid) => {
    setLoading();
    console.log(songname)
    const res = await axios.get(
      `https://api-jio-saavn.herokuapp.com/song/?q=https://www.jiosaavn.com/song/${songname}/${songid}`
    );
    console.log(res.data)

    dispatch({
      type: GET_SONG,
      payload: res.data
    });
  };

  // Get Repos
  const getSongRepos = async songname => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/songs/${songname}/repos?per_page=100&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // Clear Songs
  const clearSongs = () => dispatch({ type: CLEAR_SONGS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        songs: state.songs,
        song: state.song,
        repos: state.repos,
        loading: state.loading,
        searchSongs,
        clearSongs,
        getSong,
        getSongRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
