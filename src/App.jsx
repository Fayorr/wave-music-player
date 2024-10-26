import React, { useState, useRef } from 'react'
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import './styles/app.scss'
import data from "./components/util"



const App = () => {
//Ref
const audioRef = useRef(null)
//State
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
})

const timeUpdateHandler = (e) => {

 const current = e.target.currentTime;
 const duration = e.target.duration;
 setSongInfo({...songInfo, currentTime: current, duration})
};

  return (
    <>

      <Song currentSong={currentSong}/>
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library 
      songs={songs} 
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
      audioRef={audioRef}
      isPlaying={isPlaying}

      />
      <audio 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}>
      </audio>
    </>
  )
}

export default App;
