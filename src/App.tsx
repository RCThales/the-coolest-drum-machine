import "./App.css";
import DrumPad from "./components/drumpad/drumpad";
import Info from "./components/info/info";
import Options from "./components/options/options";

const App = () => {
  return (
    <div id="drum-machine" className="taiko-container">
      <div className="bg" />
      <div className="bg-color" />
      <div className="drum-pad-container-wrapper">
        <Info />
        <div className="drum-pad-container">
          <div className="drum-row">
            <DrumPad letter="Q" />
            <DrumPad letter="W" />
            <DrumPad letter="E" />
          </div>

          <div className="drum-row-oni">
            <DrumPad letter="A" />
            <DrumPad letter="S" />
            <DrumPad letter="D" />
          </div>

          <div className="drum-row">
            <DrumPad letter="Z" />
            <DrumPad letter="X" />
            <DrumPad letter="C" />
          </div>
        </div>
      </div>
      <Options />
      <span className="icons">
        Icons by <a href="https://icons8.com">Icons8</a>
      </span>
    </div>
  );
};

export default App;
