import React, {useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

const Player = ( {currentSong, isPlaying, setIsPlaying} ) => {

  const audioRef = useRef(null)
const playSongHandler = () => {
 if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
 }  else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
 }   

};
const timeUpdateHandler = (e) => {

 const current = e.target.currentTime;
 const duration = e.target.duration;
 setSongInfo({...songInfo, currentTime: current, duration})
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
  setSongInfo({...songInfo, currentTime: e.target.value})
  audioRef.current.currentTime = e.target.value
}

//State
const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
})
  return (
    <div className='player'>
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input 
        type="range" 
        min={0} 
        max={songInfo.duration} 
        value={songInfo.currentTime} 
        onChange={dragHandler}
        name="" 
        id="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
        

      </div>
      <audio 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}></audio>
    </div>
  )
}

export default Player