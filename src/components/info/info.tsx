import "./info.css";
import { useSelector } from "react-redux";

const Info = () => {
  const currentText = useSelector(
    (state: RootState) => state?.textScreen?.textScreen
  );

  return (
    <div className="info_wrapper">
      <span id="display">{currentText}</span>
    </div>
  );
};

export default Info;
