import React from 'react'

const Song = ( { currentSong } ) => {
  return (
    <div className='song-container'>
       <img src={currentSong.cover} alt="coverPic"></img>
        <p>{currentSong.name}</p>
        <p>{currentSong.artist}</p>
    </div>
  )
}

export default Song;