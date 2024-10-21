import React, { useState } from 'react'
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import './styles/app.scss'
import data from "./components/util"



const App = () => {
const [songs, setSongs] = useState(data());
const [currentSong, SetCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);


  return (
    <>
      <Song currentSong={currentSong}/>
      <Player 
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs}/>
    </>
  )
}

export default App;
