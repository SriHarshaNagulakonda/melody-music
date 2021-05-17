import React, { useReducer } from 'react';
import axios from 'axios';
import SaavnContext from './saavnContext';
import SaavnReducer from './saavnReducer';
import {
  SEARCH_SONGS,
  SET_LOADING,
  CLEAR_SONGS,
  GET_SONG,
  GET_ALBUM_SONGS,
} from '../types';

const SaavnState = props => {
  const initialState = {
    songs: [],
    song: {},
    album_songs: [],
    loading: false,
    album_url:""
  };
  var album_url=""

  const [state, dispatch] = useReducer(SaavnReducer, initialState);

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
  const getAlbumSongs = async (songname,songid) => {
    setLoading();

    const res = await axios.get(
      `https://api-jio-saavn.herokuapp.com/song/?q=https://www.jiosaavn.com/song/${songname}/${songid}`
    );
      
    const album_url=res.data.album_url
    const res_albums = await axios.get(
      `https://api-jio-saavn.herokuapp.com/album/?q=${album_url}`
    );  
    console.log(res_albums,'these are the fetched')

    res_albums.data.songs.push(res.data)
    const final_songs = res_albums.data.songs.slice().reverse()
    dispatch({
      type: GET_ALBUM_SONGS,
      payload: final_songs
    });
  };

  // Clear Songs
  const clearSongs = () => dispatch({ type: CLEAR_SONGS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <SaavnContext.Provider
      value={{
        songs: state.songs,
        SONG: state.song,
        album_songs: state.album_songs,
        loading: state.loading,
        searchSongs,
        clearSongs,
        getSong,
        getAlbumSongs,
        clearSongs,
      }}
    >
      {props.children}
    </SaavnContext.Provider>
  );
};

export default SaavnState;
