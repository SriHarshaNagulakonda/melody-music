import React,{ useState } from 'react'
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const audioLskflsdkkkkkists = [
  {
    name: "Despacito",
    singer: "Luis Fonsi",
    cover:
      "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
    musicSrc:
      "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
  },
  {
    name: "Dorost Nemisham",
    singer: "Sirvan Khosravi",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc:
      "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3"
  }
];

function AudioPlayer({songs}) {

  const [audioLists, setAudioLists] = useState([])
  // setAudioLists(props.songs.map(song => {
  //   return  {musicSrc:song.media_url,name:song.song,cover:song.image}
  // }))

console.log(songs.songs.map(function(obj) {
    obj['musicSrc'] = obj['media_url']; // Assign new key
    obj['name']=obj['song'];
    obj['cover']=obj['image'];
    obj['singer']=obj['music']
    
    return obj;
}))
  // setAudioLists(songs)

  return (
    <div className="App">
      {/* <h1>Reat Jinke Music Player CodeSandbox</h1> */}
      <ReactJkMusicPlayer
        audioLists={songs.songs}
        // audioLists={songs.songs.map(song => {
        //   return {musicSrc:song.media_url,name:song.song,cover:song.image,singer:song.music}
        // })}
        showMediaSession
        autoPlay={false}
      />
    </div>
  );
}

export default AudioPlayer;