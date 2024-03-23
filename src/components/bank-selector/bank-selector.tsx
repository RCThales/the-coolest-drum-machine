import { useDispatch, useSelector } from "react-redux";
import { setCurrentLibrary } from "../../stores/slices/librarySlice";
import "./bank.css";
import { BaseSyntheticEvent, useEffect } from "react";
import { setTextScreen } from "../../stores/slices/textScreen";

const BankSelector = ({ banks }: BankSelectorProps) => {
  const dispatch = useDispatch();

  const currentLibrary = useSelector(
    (state: LibraryRootState) => state?.library?.currentLibrary
  );

  useEffect(() => {
    changeBackgroundColor();
  }, [currentLibrary]);

  useEffect(() => {
    dispatch(setCurrentLibrary(banks[0].sounds[0]));
  }, [dispatch, banks]);

  const getBankAndLibraryIndexes = (value: string) => {
    const indexes = value.split(",");
    return {
      chosenBank: indexes[0],
      chosenLib: indexes[1],
    };
  };

  const updateCurrentLibrary = (chosenBank: number, chosenLib: number) => {
    dispatch(setCurrentLibrary(banks[chosenBank].sounds[chosenLib]));
    dispatch(
      setTextScreen(`Library: ${banks[chosenBank].sounds[chosenLib].name}`)
    );
  };

  const changeBackgroundColor = () => {
    const bgElement = document.querySelector(".bg-color") as HTMLElement;
    if (bgElement) {
      bgElement?.style.setProperty(
        "--bgcolor",
        `${currentLibrary?.backgroundColor}`
      );
    }
  };

  const handleChangeOfLibrary = (event: BaseSyntheticEvent) => {
    const { chosenBank, chosenLib } = getBankAndLibraryIndexes(
      event.target.value
    );
    updateCurrentLibrary(parseInt(chosenBank), parseInt(chosenLib));
    changeBackgroundColor();
  };

  return (
    <div className="bank_wrapper">
      <label htmlFor="power">Audio Bank</label>
      <select onChange={handleChangeOfLibrary} name="bank" id="bank">
        {banks.map((bank: Bank, indexBanks: number) => {
          return (
            <optgroup key={`bank_${indexBanks}`} label={bank.label}>
              {bank?.sounds?.map((library: Libs, indexLibs: number) => {
                return (
                  <option
                    key={`bank_lib_${indexLibs}`}
                    value={`${indexBanks},${indexLibs}`}
                  >
                    {library.name}
                  </option>
                );
              })}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
};

export default BankSelector;
