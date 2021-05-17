import React,{Fragment, useEffect, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layouts/Spinner'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos';
import  SaavnContext  from '../../context/saavn/saavnContext'
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from './AudioPlayer'

const Song = ({match}) => {

  const saavnContext = useContext(SaavnContext)
  const { getSong, clearSongs, getAlbumSongs,album_songs, loading, SONG} = saavnContext

  const {
    song,
    album,
    image,
    year,
    music,
    singers,
    starring,
    language,
    duration,
    media_url,
    album_url,
    has_lyrics,
    perma_link
  } = SONG;


  useEffect(() => {
    clearSongs();
    getSong(match.params.songname,match.params.songid)
    getAlbumSongs(match.params.songname,match.params.songid)
  }, [])

  const [audioLists, setAudioLists] = useState([
    { musicSrc: media_url,name:"name" },
    { musicSrc: media_url },
  ])
  


  // setTimeout(()setAudioLists,5000)

  return (
    <div>
      {loading && <Spinner/>}
      {!loading && 
      <Fragment>
          <Link to='/' className="btn btn-light">Back To Search</Link>
          Latest: 
          {year>=2015 ? (
            <i className='fas fa-check text-success' />
          ) : (
            <i className='fas fa-times-circle text-danger' />
          )}   

          <div className='card grid-2'>
                  <div className='all-center'>
                    <img
                      src={image}
                      className='round-img'
                      alt=''
                      style={{ width: '150px' }}
                    />
                    <h1>{song}</h1>
                    <p>Album: {album}</p>
                  </div>
                  <div>
                    <a href={perma_link} className='btn btn-dark text-white'>
                      Visit Song in JIO Saavn
                    </a>
                    <br />
                    <ul>
                    <li>
                        {song && (
                          <Fragment>
                            <strong>Song Name: </strong> {song}
                          </Fragment>
                        )}
                      </li>                      <li>
                        {year && (
                          <Fragment>
                            <strong>Year: </strong> {year}
                          </Fragment>
                        )}
                      </li>

                      <li>
                        {music && (
                          <Fragment>
                            <strong>Music: </strong> {music}
                          </Fragment>
                        )}
                      </li>

                      <li>
                        {duration && (
                          <Fragment>
                            <strong>Duration: </strong> {duration}s
                          </Fragment>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='card text-center'>
                  {/* <div className='badge badge-primary'>Followers: {followers}</div>
                  <div className='badge badge-success'>Following: {following}</div>
                  <div className='badge badge-light'>Public Repos: {public_repos}</div>
                  <div className='badge badge-dark'>Public Gists: {public_gists}</div> */}
                  {/* {songs.length} abcd */}
                  

  
                  {/* <ReactAudioPlayer
                      src={media_url}
                      autoPlay
                      controls
                    /> */}
                    <ol type="1">
                      {album_songs.map( (song,index) => {
                      return  <li>{song.song}</li>
                      })}
                    </ol>
                  <AudioPlayer songs={album_songs} />
                </div>
                {/* <Repos repos={repos} /> */}
      </Fragment>
              
    }
    </div>
  )
}


export default Song