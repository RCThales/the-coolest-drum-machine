import "./volume.css";
import { useDispatch, useSelector } from "react-redux";
import { setVolume } from "../../stores/slices/volumeSlice";
import { useRef } from "react";
import { setTextScreen } from "../../stores/slices/textScreen";

const Volume = () => {
  const volumeRef = useRef<HTMLInputElement>(null);
  const currentVolume = useSelector((state) => state?.volume?.volume);
  const dispatch = useDispatch();

  const changeVolume = () => {
    const volumeElementValue = volumeRef?.current?.value as string;
    const volumeFromZeroToOne = parseFloat(volumeElementValue) / 100;

    dispatch(setTextScreen(`Volume: ${volumeElementValue}%`));
    dispatch(setVolume(volumeFromZeroToOne));
  };

  return (
    <div className="volume_wrapper">
      {currentVolume !== 0 && (
        <>
          <label htmlFor="volume">Volume</label>
          <input
            onChange={changeVolume}
            ref={volumeRef}
            id="volume"
            type="range"
            min={0}
            max={100}
            defaultValue={50}
          ></input>
        </>
      )}
    </div>
  );
};

export default Volume;
