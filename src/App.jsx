import React, { useState, useRef } from 'react'
import Nav from './components/Nav'
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
const [libraryStatus, setLibraryStatus] = useState(false);

const timeUpdateHandler = (e) => {

 const current = e.target.currentTime;
 const duration = e.target.duration;
 setSongInfo({...songInfo, currentTime: current, duration})
};

  return (
    <>
      <Nav 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong}/>
      <Player
        songs={songs} 
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library 
      songs={songs} 
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
      audioRef={audioRef}
      isPlaying={isPlaying}
      libraryStatus={libraryStatus}
      setLibraryStatus={setLibraryStatus}
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
