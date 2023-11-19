import { useState } from "react";
import "./NumberOfPeople.css";
import DisplayTip from "../DisplayTip";

const NumberOfPeople = (props) => {
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const { billAmount, setBillAmount, tipPercentage, setPercentage } = props;
  return (
    <>
      <div className="numberofpeople">
        <p>Number of People</p>
        <input
          type="number"
          min="0"
          id="numberofpeople"
          value={numberOfPeople}
          placeholder="0"
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />
      </div>
      <DisplayTip
        billAmount={billAmount}
        setBillAmount={setBillAmount}
        tipPercentage={tipPercentage}
        setPercentage={setPercentage}
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}
      />
    </>
  );
};

export default NumberOfPeople;
