import { useState } from "react";
import "./BillAmount.css";
import TipPercentage from "../TipPercentage";

const BillAmount = () => {
  const [billAmount, setBillAmount] = useState("");

  return (
    <>
      <div className="billamount">
        <p>Bill</p>
        <input
          type="number"
          min="0"
          id="billamount"
          value={billAmount}
          placeholder="£0.00"
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </div>
      <TipPercentage
        billAmount={billAmount * 100}
        setBillAmount={setBillAmount}
      />
    </>
  );
};

export default BillAmount;
