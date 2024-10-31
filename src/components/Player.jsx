import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

const Player = ( {songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef, songInfo } ) => {

 //useEffect
 useEffect(()=>{
  const newSongs = songs.map((song) => {
      if(song.id === currentSong.id){
        return{...song, active: true,}
      } else{
        return{...song, active: false, }
      }
    });
    setSongs(newSongs);
    if (isPlaying) {
       audioRef.current.play();
    } else{
       audioRef.current.pause();
    }
  
 }, [currentSong])


const playSongHandler = () => {
 if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
 }  else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
 }   

};


function getTime(time) {
  // Calculate minutes and remaining seconds
  const minutes = Math.floor(time / 60);
  const remainingSeconds = Math.floor(time % 60);

  // Pad with leading zeros if necessary
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

const dragHandler = (e)=>{
    audioRef.current.currentTime = e.target.value
};
const skipTrackHandler = (direction) =>{
 let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
 if(direction === "skip-forward"){
  setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  // setIsPlaying(isPlaying);
  return;
 };

 if(direction === "skip-back"){
    if((currentIndex - 1) % songs.length === -1){
      setCurrentSong(songs[songs.length - 1]);
      // setIsPlaying(isPlaying);
      return;
    }}
  setCurrentSong(songs[(currentIndex - 1) % songs.length])
 }

  return (
    <div className='player'>
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input 
        type="range" 
        min={0} 
        max={songInfo.duration || 0} 
        value={songInfo.currentTime} 
        onChange={dragHandler}
        name="" 
        id="range" />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "00:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon onClick={() => {skipTrackHandler("skip-back")}} className="skip-back" size="2x" icon={faAngleLeft}/>
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
        <FontAwesomeIcon onClick={() => {skipTrackHandler("skip-forward")}} className="skip-forward" size="2x" icon={faAngleRight}/>
        

      </div>
      
    </div>
  )
}

export default Player