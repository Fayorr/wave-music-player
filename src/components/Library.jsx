import LibrarySong from './LibrarySong'

const Library = ({ isPlaying, audioRef, songs, setCurrentSong }) => {
  return (
    <div className='library'>
        <h2>Library</h2>
        <div className="library-songs">
            {songs.map((song) => (
              <LibrarySong 
              setCurrentSong={setCurrentSong} 
              song={song}
              songs={songs} 
              id={song.id}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
              />
            ))}
        </div>
    </div>
  )
}

export default Library;