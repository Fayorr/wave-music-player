import React, { useState } from 'react'
import Song from './components/Song'
import Player from './components/Player'
import './styles/app.scss'
import data from "./components/util"



const App = () => {
const [songs, setSongs] = useState(data());
const [currentSong, SetCurrentSong] = useState(songs[0]);

  return (
    <>
      <Song currentSong={currentSong}/>
      <Player />
    </>
  )
}

export default App;
