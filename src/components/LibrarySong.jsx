
const LibrarySong = ({ isPlaying, audioRef, song, songs, setSongs, setCurrentSong, id }) => {

  const songSelectHandler = () => {
    setCurrentSong(song);
    // Add active state
    const newSongs = songs.map((song) => {
      if(song.id === id){
        return{...song, active: true,}
      } else{
        return{...song, active: false, }
      }
    });
    setSongs(newSongs);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
    
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        })
      }
    }
    audioRef.current.play();
  }

  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : ""}`}>
      <img src={song.cover} alt="coverPic"></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong;
