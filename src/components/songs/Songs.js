import React, { useContext } from 'react'
import SongItem from './songitem'
import Spinner from '../layouts/Spinner'
import  SaavnContext  from '../../context/saavn/saavnContext'


function Songs() {
    const saavnContext = useContext(SaavnContext)

    const {loading,songs} = saavnContext;
    if(loading){
        return <Spinner />
    }
    else 
    return (
         <div style={songStyle}>
            {songs.map((song) => {
                return <SongItem song={song} key={song.id} />
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
