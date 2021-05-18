import React,{Fragment, useEffect, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layouts/Spinner'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos';
import  SaavnContext  from '../../context/saavn/saavnContext'
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from './AudioPlayer'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});




const Song = ({match}) => {

  const classes = useStyles();

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

          <div className='card grid-3'>
                  <div className='all-center'>
                    <img
                      src={image}
                      className='round-img'
                      alt=''
                      style={{ width: '150px' }}
                    />
                    <h1>{song}</h1>
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
                    <ReactAudioPlayer
                      src={media_url}
                      controls
                    />
                  </div>
                  <div>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" style={{color:'blue'}} component="h2">
                          {album}
                        </Typography>
                        <Typography variant="body2" color="text" component="p" style={{fontSize:'20px'}}>
                          <ul type="1">
                            {album_songs.map(song => {
                              return <li> {song.song} </li>
                            })}
                          </ul>
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    </Card>

                  </div>
                </div>
                  <AudioPlayer songs={album_songs} />
      </Fragment>
              
    }
    </div>
  )
}


export default Song