import { useContext, useEffect, useRef, useState } from "react";
import { SoundContext } from "../contexts/SoundContext";

export function useAudio(src, volume = 1) {
  const audio = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { soundEnabled } = useContext(SoundContext);

  useEffect(() => {
    audio.current = new Audio(src);
    audio.current.volume = volume;

    const handleCanPlayThrough = () => setIsLoaded(true);
    const handleError = (e) => console.error("Audio loading error:", e);

    audio.current.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.current.addEventListener("error", handleError);

    return () => {
      audio.current.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.current.removeEventListener("error", handleError);
    };
  }, [src, volume]);

  const play = () => {
    if (soundEnabled && isLoaded && audio.current) {
      audio.current.currentTime = 0;
      audio.current
        .play()
        .catch((e) => console.error("Audio playback error:", e));
    }
  };

  return play;
}
