import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Badge } from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';


SongItem.propTypes = {
    song: PropTypes.object.isRequired,
}


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function SongItem({song: {song, album,language,media_preview_url, starring, image,perma_url,id}}) {
  const classes = useStyles();

  const actors=starring.split(',').slice(0,2).join(',');
  var res=perma_url.split('/');
  var url=res[res.length-2]+'/'+res[res.length-1]

  return (
    <Link to={"/song/"+url} size="small" color="primary" >

    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={song}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {song}
              <span className="badge badge-success float-right" pill>{language}</span>
          </Typography>
          <b>Album:</b> {album}
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            <br />
          </Typography>
            Preview
              <ReactAudioPlayer
                  src={media_preview_url}
                  controls
                />
          {starring.length>0 && <><b>Starring: </b>{actors} </> }

        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
