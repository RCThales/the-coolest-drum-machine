import "./power-button.css";
import { useDispatch, useSelector } from "react-redux";
import { setVolume } from "../../stores/slices/volumeSlice";
import { setTextScreen } from "../../stores/slices/textScreen";
import { useRef } from "react";

const PowerButton = () => {
  const volumeRef = useRef<HTMLInputElement>(null);
  const currentVolume = useSelector(
    (state: RootState) => state?.volume?.volume
  );
  const dispatch = useDispatch();

  const togglePower = () => {
    const powerButton = volumeRef.current as HTMLInputElement;
    if (powerButton.checked) {
      dispatch(setVolume(0.5));
      dispatch(setTextScreen("SOUND ON!"));
    } else {
      dispatch(setVolume(0));
      dispatch(setTextScreen("MUTED"));
    }
  };

  return (
    <div className="power_wrapper">
      <label htmlFor="power">Power</label>
      <input
        onChange={togglePower}
        ref={volumeRef}
        type="checkbox"
        id="power"
        checked={currentVolume > 0}
        className="toggle"
      ></input>
    </div>
  );
};

export default PowerButton;
