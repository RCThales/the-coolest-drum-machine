import React, { useEffect, useRef, useState } from "react";
import "./drumpad.css";
import { useSelector, useDispatch } from "react-redux";
import { setTextScreen } from "../../stores/slices/textScreen";

interface DrumPadProps {
  letter: string;
}

const DrumPad: React.FC<DrumPadProps> = ({ letter }) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const drumRef = useRef<HTMLAudioElement | null>(null);
  const currentLibrary = useSelector(
    (state: LibraryRootState) => state?.library?.currentLibrary
  );
  const currentVolume = useSelector(
    (state: VolumeRootState) => state?.volume?.volume
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toUpperCase() === letter) {
        setIsActive(true);
        playAudio();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [letter]);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key.toUpperCase() === letter) {
        setIsActive(false);
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  useEffect(() => {
    if (drumRef.current) {
      drumRef.current.volume = currentVolume;
    }
  }, [currentVolume]);

  const playAudio = () => {
    if (drumRef.current) {
      dispatch(setTextScreen(`Played: ${letter}`));
      drumRef.current.currentTime = 0;
      drumRef.current.play();
    }
  };

  const dispatchClickEvent = () => {
    playAudio();
  };

  const soundSrc =
    currentLibrary && currentLibrary[letter as keyof typeof currentLibrary];

  const buttonClassName = `drum-pad-wrapper ${isActive ? "active" : ""}`;

  return (
    <div className={buttonClassName}>
      <button
        style={{ background: currentLibrary?.buttonColor }}
        onClick={dispatchClickEvent}
        id={letter}
        className="drum-pad"
      >
        {letter}
        <audio
          ref={drumRef}
          src={soundSrc}
          className="clip"
          id={letter}
        ></audio>
      </button>
      {letter === "S" && (
        <img
          alt="Chosen library image"
          src={currentLibrary?.oniEmoji}
          className="oni"
        ></img>
      )}
    </div>
  );
};

export default DrumPad;
