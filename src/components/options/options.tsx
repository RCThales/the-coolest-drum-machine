import "./options.css";
import PowerButton from "../power-button/power-button";
import Volume from "../volume/volume";
import BankSelector from "../bank-selector/bank-selector.tsx";
import { banks } from "../../banks.ts";

const Options = () => {
  return (
    <details>
      <summary></summary>

      <div id="display" className="taiko-display">
        <PowerButton />
        <Volume />
        <BankSelector banks={banks} />
      </div>
    </details>
  );
};

export default Options;
