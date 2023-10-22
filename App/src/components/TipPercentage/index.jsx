import { useState } from "react";
import NumberOfPeople from "../NumberOfPeople";
import "./TipPercentage.css";

const TipPercentage = (props) => {
  const [percentage, setPercentage] = useState("");

  const tipPercentages = [
    { id: 1, percentage: 0.05 },
    { id: 2, percentage: 0.1 },
    { id: 3, percentage: 0.15 },
    { id: 4, percentage: 0.25 },
    { id: 5, percentage: 0.5 },
  ];

  const tipSelector = () => {
    return tipPercentages.map((tipPercentage) => {
      const { id, percentage } = tipPercentage;
      return (
        <button
          className="tipbtn"
          key={id}
          value={percentage}
          onClick={(e) => {
            setPercentage(e.target.value);
          }}
        >
          {percentage * 100}%
        </button>
      );
    });
  };

  return (
    <>
      <div className="tippercentages">
        <p>Select Tip %</p>
        <div className="tipbtns">
          {tipSelector()}
          <input
            type="text"
            id="tip"
            className="tipbtn"
            value={percentage * 100}
            placeholder="%"
            onChange={(e) => setPercentage(e.target.value / 100)}
          />
        </div>
      </div>
      <NumberOfPeople
        billAmount={props.billAmount}
        setBillAmount={props.setBillAmount}
        tipPercentage={percentage}
        setPercentage={setPercentage}
      />
    </>
  );
};

export default TipPercentage;
