
const LibrarySong = ({ isPlaying, audioRef, song, songs, setCurrentSong, id }) => {

const songSelectHandler = () => {
  setCurrentSong(song);
  if (isPlaying){
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined){
      playPromise.then((audio) => {
        audioRef.current.play();
        
      })
    }
  }
  audioRef.current.play();
}

  return (
    <div onClick={songSelectHandler} className='library-song'>
       <img src={song.cover} alt="coverPic"></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong;