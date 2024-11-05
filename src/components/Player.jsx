
import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

const Player = ( {songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef, songInfo, currentIndex } ) => {



const playSongHandler = () => {
 if (isPlaying ) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
 }  else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
 }   
};

//Make song play after clicking next or back
const activeSongHandler = (prevSong)=>{
     const newSongs = songs.map((song) => {
      if(song.id === prevSong.id){
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
}
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
 
 if(direction === "skip-forward"){
  setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  activeSongHandler(songs[(currentIndex + 1) % songs.length])
  return;
 };

 if(direction === "skip-back"){
    if((currentIndex - 1) % songs.length === -1){
      setCurrentSong(songs[songs.length - 1]);
      return;
    }}
  setCurrentSong(songs[(currentIndex - 1) % songs.length])
  activeSongHandler(songs[(currentIndex - 1) % songs.length])
 }

//  Add the styles
const trackAnim = {
  transform: `translateX(${songInfo.animationPercentage}%)`
}

  return (
    <div className='player'>
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
          <input 
            type="range" 
            min={0} 
            max={songInfo.duration || 0} 
            value={songInfo.currentTime} 
            onChange={dragHandler}
            name="" 
            id="range" 
          />
          <div style={trackAnim} className="animate-track"></div>
       </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "00:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon 
          onClick={() => {skipTrackHandler("skip-back")}} 
          className="skip-back" 
          size="2x" 
          icon={faAngleLeft}
        />
        <FontAwesomeIcon 
        onClick={playSongHandler} 
        className="play" 
        size="2x" 
        icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon 
        onClick={() => {skipTrackHandler("skip-forward")}} 
        className="skip-forward" 
        size="2x" 
        icon={faAngleRight}
        />
        

      </div>
      
    </div>
  )
}

export default Player

