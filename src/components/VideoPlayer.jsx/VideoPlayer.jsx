// import { useEffect, useRef, useState } from "react";
// import { Volume2, VolumeX, Rewind, FastForward, Play, Pause, Maximize, Settings } from "lucide-react";

// function VideoPlayer({ videoSrc }) {
//   const videoRef = useRef(null);
//   const progressBarRef = useRef(null);
//   const videoContainerRef = useRef(null);
  
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [lastTime, setLastTime] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [showControls, setShowControls] = useState(true);
//   const [playbackSpeed, setPlaybackSpeed] = useState(1);
//   const [showSpeedMenu, setShowSpeedMenu] = useState(false);

//   // Timer for hiding controls
//   const hideControlsTimeout = useRef(null);

//   // Format time in MM:SS format
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   // Load saved time on mount
//   useEffect(() => {
//     const savedTime = parseFloat(localStorage.getItem("lastPlayedTime") || "0");
//     setLastTime(savedTime);
//     setCurrentTime(savedTime);

//     const video = videoRef.current;
//     if (video) {
//       video.currentTime = savedTime;
      
//       // Set initial volume
//       video.volume = volume;

//       const handleTimeUpdate = () => {
//         if (!video.paused) {
//           setCurrentTime(video.currentTime);
//           // Save time only if it's a forward or equal
//           localStorage.setItem("lastPlayedTime", video.currentTime.toString());
//         }
//       };

//       const handleSeeking = () => {
//         // Prevent forward seeking
//         const savedTimeValue = parseFloat(localStorage.getItem("lastPlayedTime") || "0");
//         if (video.currentTime > savedTimeValue) {
//           video.currentTime = savedTimeValue;
//         }
//       };

//       const handleLoadedMetadata = () => {
//         setDuration(video.duration);
//       };

//       video.addEventListener("timeupdate", handleTimeUpdate);
//       video.addEventListener("seeking", handleSeeking);
//       video.addEventListener("loadedmetadata", handleLoadedMetadata);

//       return () => {
//         video.removeEventListener("timeupdate", handleTimeUpdate);
//         video.removeEventListener("seeking", handleSeeking);
//         video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//       };
//     }
//   }, []);

//   // Hide controls after inactivity
//   useEffect(() => {
//     const resetTimer = () => {
//       clearTimeout(hideControlsTimeout.current);
//       setShowControls(true);
      
//       if (isPlaying) {
//         hideControlsTimeout.current = setTimeout(() => {
//           setShowControls(false);
//         }, 3000);
//       }
//     };

//     const container = videoContainerRef.current;
//     if (container) {
//       container.addEventListener("mousemove", resetTimer);
//       container.addEventListener("mousedown", resetTimer);
//       container.addEventListener("touchstart", resetTimer);
//     }

//     resetTimer();

//     return () => {
//       if (container) {
//         container.removeEventListener("mousemove", resetTimer);
//         container.removeEventListener("mousedown", resetTimer);
//         container.removeEventListener("touchstart", resetTimer);
//       }
//       clearTimeout(hideControlsTimeout.current);
//     };
//   }, [isPlaying]);

//   // Effect for playback speed
//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       video.playbackRate = playbackSpeed;
//     }
//   }, [playbackSpeed]);

//   const togglePlay = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (video.paused) {
//       video.play();
//       setIsPlaying(true);
//     } else {
//       video.pause();
//       setIsPlaying(false);
//     }
//   };

//   const handleVideoClick = (e) => {
//     // Don't toggle play if clicking on controls
//     if (e.target === videoRef.current) {
//       togglePlay();
//     }
//   };

//   const rewind = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.currentTime = Math.max(0, video.currentTime - 10);
//       setCurrentTime(video.currentTime);
//     }
//   };

//   const fastForward = () => {
//     const video = videoRef.current;
//     if (video) {
//       const savedTime = parseFloat(localStorage.getItem("lastPlayedTime") || "0");
//       video.currentTime = Math.min(savedTime, video.currentTime + 10);
//       setCurrentTime(video.currentTime);
//     }
//   };

//   const handleProgressChange = (e) => {
//     const video = videoRef.current;
//     if (!video) return;
    
//     const rect = progressBarRef.current.getBoundingClientRect();
//     const pos = (e.clientX - rect.left) / rect.width;
//     const seekTime = pos * duration;
    
//     // Only allow seeking to positions that are not beyond the saved position
//     const savedTime = parseFloat(localStorage.getItem("lastPlayedTime") || "0");
//     if (seekTime <= savedTime) {
//       video.currentTime = seekTime;
//       setCurrentTime(seekTime);
//     }
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = parseFloat(e.target.value);
//     setVolume(newVolume);
    
//     const video = videoRef.current;
//     if (video) {
//       video.volume = newVolume;
//       if (newVolume === 0) {
//         setIsMuted(true);
//       } else {
//         setIsMuted(false);
//       }
//     }
//   };

//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (video) {
//       if (isMuted) {
//         video.volume = volume || 0.5;
//         setIsMuted(false);
//       } else {
//         video.volume = 0;
//         setIsMuted(true);
//       }
//     }
//   };

//   const toggleFullscreen = () => {
//     const container = videoContainerRef.current;
    
//     if (!document.fullscreenElement) {
//       if (container.requestFullscreen) {
//         container.requestFullscreen();
//       } else if (container.webkitRequestFullscreen) {
//         container.webkitRequestFullscreen();
//       } else if (container.msRequestFullscreen) {
//         container.msRequestFullscreen();
//       }
//       setIsFullscreen(true);
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen();
//       } else if (document.msExitFullscreen) {
//         document.msExitFullscreen();
//       }
//       setIsFullscreen(false);
//     }
//   };

//   const changePlaybackSpeed = (speed) => {
//     setPlaybackSpeed(speed);
//     setShowSpeedMenu(false);
//   };

//   return (
//     <div 
//       ref={videoContainerRef}
//       className="relative w-full max-w-3xl mx-auto bg-black rounded overflow-hidden group"
//     >
//       {/* Video */}
//       <video
//         ref={videoRef}
//         className="w-full cursor-pointer aspect-video"
//         onClick={handleVideoClick}
//       >
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
      
//       {/* Controls overlay */}
//       <div 
//         className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transition-opacity duration-300 ${
//           showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
//         }`}
//       >
//         {/* Progress bar */}
//         <div 
//           ref={progressBarRef}
//           className="w-full h-2 bg-gray-700 rounded-full mb-4 cursor-pointer" 
//           onClick={handleProgressChange}
//         >
//           <div 
//             className="h-full bg-red-600 rounded-full relative"
//             style={{ width: `${(currentTime / duration) * 100}%` }}
//           >
//             <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
//           </div>
//         </div>
        
//         {/* Main controls */}
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             {/* Play/Pause */}
//             <button
//               onClick={togglePlay}
//               className="p-2 hover:bg-gray-700 rounded-full transition-colors"
//             >
//               {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
//             </button>
            
//             {/* Rewind */}
//             <button
//               onClick={rewind}
//               className="p-2 hover:bg-gray-700 rounded-full transition-colors"
//             >
//               <Rewind className="w-5 h-5" />
//             </button>
            
//             {/* Fast forward */}
//             <button
//               onClick={fastForward}
//               className="p-2 hover:bg-gray-700 rounded-full transition-colors"
//             >
//               <FastForward className="w-5 h-5" />
//             </button>
            
//             {/* Time display */}
//             <div className="text-sm text-gray-200">
//               {formatTime(currentTime)} / {formatTime(duration)}
//             </div>
//           </div>
          
//           <div className="flex items-center gap-4">
//             {/* Playback Speed */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowSpeedMenu(!showSpeedMenu)}
//                 className="p-2 hover:bg-gray-700 rounded-full transition-colors flex items-center gap-1"
//               >
//                 <Settings className="w-4 h-4" />
//                 <span className="text-xs">{playbackSpeed}x</span>
//               </button>
              
//               {showSpeedMenu && (
//                 <div className="absolute bottom-full right-0 bg-gray-800 rounded p-2 mb-1 w-24">
//                   {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
//                     <button
//                       key={speed}
//                       onClick={() => changePlaybackSpeed(speed)}
//                       className={`block w-full text-left px-2 py-1 text-sm rounded ${
//                         playbackSpeed === speed ? 'bg-gray-700' : 'hover:bg-gray-700'
//                       }`}
//                     >
//                       {speed}x
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
            
//             {/* Volume */}
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={toggleMute}
//                 className="p-2 hover:bg-gray-700 rounded-full transition-colors"
//               >
//                 {isMuted || volume === 0 ? (
//                   <VolumeX className="w-5 h-5" />
//                 ) : (
//                   <Volume2 className="w-5 h-5" />
//                 )}
//               </button>
              
//               <div className="w-20 hidden sm:block">
//                 <input
//                   type="range"
//                   min="0"
//                   max="1"
//                   step="0.01"
//                   value={isMuted ? 0 : volume}
//                   onChange={handleVolumeChange}
//                   className="w-full accent-red-600"
//                 />
//               </div>
//             </div>
            
//             {/* Fullscreen */}
//             <button
//               onClick={toggleFullscreen}
//               className="p-2 hover:bg-gray-700 rounded-full transition-colors"
//             >
//               <Maximize className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoPlayer;


import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Rewind, FastForward, Play, Pause, Maximize, Settings } from "lucide-react";

function VideoPlayer({ videoSrc }) {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const videoContainerRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [lastTime, setLastTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

  // Timer for hiding controls
  const hideControlsTimeout = useRef(null);

  // Format time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Load saved time on mount
  useEffect(() => {
    const savedTime = parseFloat(localStorage.getItem("lastPlayedTime") || "0");
    setLastTime(savedTime);
    setCurrentTime(savedTime);

    const video = videoRef.current;
    if (video) {
      video.currentTime = savedTime;
      
      // Set initial volume
      video.volume = volume;

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
        
        // Update lastTime (maximum watched position) only when moving forward
        if (!video.paused && video.currentTime > lastTime) {
          setLastTime(video.currentTime);
          // Save time to localStorage
          localStorage.setItem("lastPlayedTime", video.currentTime.toString());
        }
      };

      const handleSeeking = () => {
        // Prevent forward seeking
        const savedTimeValue = parseFloat(localStorage.getItem("lastPlayedTime") || "0");
        if (video.currentTime > savedTimeValue) {
          video.currentTime = savedTimeValue;
          setCurrentTime(savedTimeValue);
        }
      };

      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };

      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("seeking", handleSeeking);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("seeking", handleSeeking);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  // Hide controls after inactivity
  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(hideControlsTimeout.current);
      setShowControls(true);
      
      if (isPlaying) {
        hideControlsTimeout.current = setTimeout(() => {
          setShowControls(false);
        }, 3000);
      }
    };

    const container = videoContainerRef.current;
    if (container) {
      container.addEventListener("mousemove", resetTimer);
      container.addEventListener("mousedown", resetTimer);
      container.addEventListener("touchstart", resetTimer);
    }

    resetTimer();

    return () => {
      if (container) {
        container.removeEventListener("mousemove", resetTimer);
        container.removeEventListener("mousedown", resetTimer);
        container.removeEventListener("touchstart", resetTimer);
      }
      clearTimeout(hideControlsTimeout.current);
    };
  }, [isPlaying]);

  // Effect for playback speed
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoClick = (e) => {
    // Don't toggle play if clicking on controls
    if (e.target === videoRef.current) {
      togglePlay();
    }
  };

  const rewind = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = Math.max(0, video.currentTime - 10);
      setCurrentTime(video.currentTime);
    }
  };

  const fastForward = () => {
    const video = videoRef.current;
    if (video) {
      const savedTime = parseFloat(localStorage.getItem("lastPlayedTime") || "0");
      video.currentTime = Math.min(savedTime, video.currentTime + 10);
      setCurrentTime(video.currentTime);
    }
  };

  const handleProgressChange = (e) => {
    const video = videoRef.current;
    if (!video) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * duration;
    
    // Only allow seeking to positions that are not beyond the saved position
    const savedTime = parseFloat(localStorage.getItem("lastPlayedTime") || "0");
    if (seekTime <= savedTime) {
      video.currentTime = seekTime;
      setCurrentTime(seekTime);
    } else {
      // If they try to go beyond the saved position, take them exactly to their last watched point
      video.currentTime = savedTime;
      setCurrentTime(savedTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    const video = videoRef.current;
    if (video) {
      video.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      if (isMuted) {
        video.volume = volume || 0.5;
        setIsMuted(false);
      } else {
        video.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const toggleFullscreen = () => {
    const container = videoContainerRef.current;
    
    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const changePlaybackSpeed = (speed) => {
    setPlaybackSpeed(speed);
    setShowSpeedMenu(false);
  };

  // CSS Variable for primary color
  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', '#ff6636');
  }, []);
  
  return (
    <div 
      ref={videoContainerRef}
      className="relative w-full max-w-3xl mx-auto bg-gray-100 rounded-lg overflow-hidden group shadow-lg"
      style={{ '--tw-shadow-color': 'rgba(255, 102, 54, 0.2)' }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full cursor-pointer aspect-video bg-white"
        onClick={handleVideoClick}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Controls overlay */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Progress bar */}
        <div 
          ref={progressBarRef}
          className="w-full h-2 bg-gray-200 rounded-full mb-4 cursor-pointer" 
          onClick={handleProgressChange}
        >
          <div 
            className="h-full rounded-full relative"
            style={{ 
              width: `${(currentTime / duration) * 100}%`,
              backgroundColor: 'var(--color-primary)' 
            }}
          >
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2" style={{ borderColor: 'var(--color-primary)' }}></div>
          </div>
        </div>
        
        {/* Main controls */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-800"
              style={{ 
                color: isPlaying ? 'var(--color-primary)' : 'rgb(31, 41, 55)' 
              }}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            
            {/* Rewind */}
            <button
              onClick={rewind}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-800"
            >
              <Rewind className="w-5 h-5" />
            </button>
            
            {/* Fast forward */}
            <button
              onClick={fastForward}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-800"
            >
              <FastForward className="w-5 h-5" />
            </button>
            
            {/* Time display */}
            <div className="text-sm text-gray-700 font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Playback Speed */}
            <div className="relative">
              <button
                onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-800 flex items-center gap-1"
              >
                <Settings className="w-4 h-4" />
                <span className="text-xs font-medium">{playbackSpeed}x</span>
              </button>
              
              {showSpeedMenu && (
                <div className="absolute bottom-full right-0 bg-white rounded-lg shadow-lg p-2 mb-1 w-24 border border-gray-200">
                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => changePlaybackSpeed(speed)}
                      className={`block w-full text-left px-2 py-1 text-sm rounded ${
                        playbackSpeed === speed 
                          ? 'text-white font-medium' 
                          : 'text-gray-800 hover:bg-gray-100'
                      }`}
                      style={{
                        backgroundColor: playbackSpeed === speed ? 'var(--color-primary)' : ''
                      }}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Volume */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-800"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              
              <div className="w-20 hidden sm:block">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full"
                  style={{ accentColor: 'var(--color-primary)' }}
                />
              </div>
            </div>
            
            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-800"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;