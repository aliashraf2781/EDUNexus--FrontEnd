import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

function VideoJSPlayer({ options }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const player = (playerRef.current = videojs(
        videoRef.current,
        options,
        () => {
          console.log("Player ready ✅");
        }
      ));

      player.on("timeupdate", () => {
        if (!player.paused()) {
          lastTimeRef.current = Math.max(
            lastTimeRef.current,
            player.currentTime()
          );
        }
      });

      player.on("seeking", () => {
        if (player.currentTime() > lastTimeRef.current) {
          player.currentTime(lastTimeRef.current);
        }
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div data-vjs-player className="w-full max-w-3xl mx-auto">
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered w-full h-full"
        controls
      />
    </div>
  );
}

export default VideoJSPlayer;
