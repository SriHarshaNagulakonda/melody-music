import React, { useContext } from 'react'
import SongItem from './songitem'
import Spinner from '../layouts/Spinner'
import  SaavnContext  from '../../context/saavn/saavnContext'
import { Row, Col } from 'reactstrap';

function Songs() {
    const saavnContext = useContext(SaavnContext)

    const {loading,songs} = saavnContext;
    if(loading){
        return <Spinner />
    }
    else 
    return (
         <div className="row">
            {songs.map((song) => {
                return <div className="col-md-4" style={{marginBottom:10}}><SongItem song={song} key={song.id} /></div>
            })}
        </div>
    );
}

const songStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

Songs.propTypes = {
    
}

export default Songs
