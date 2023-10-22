import "./DisplayTip.css";

const DisplayTip = (props) => {
  const {
    billAmount,
    setBillAmount,
    tipPercentage,
    setPercentage,
    numberOfPeople,
    setNumberOfPeople,
  } = props;

  const tipPerPerson = (billAmount * tipPercentage) / numberOfPeople;
  const totalPerPerson = billAmount / numberOfPeople + tipPerPerson;

  const numberFormat = (amount) => {
    const pounds = Math.floor(amount / 100);
    // const pence = String(amount % 100).padStart(2, "0");
    const pence = String(Math.ceil(amount % 100)).padStart(2, "0");
    console.log(`amount = ${amount}, pounds = ${pounds}, pence = ${pence}`);
    return `£${pounds}.${pence}`;
  };

  return (
    <>
      <div className="displaytip">
        <div className="tipperperson">
          <p>Tip amount</p>
          <p className="per">/person</p>
        </div>
        <p className="tipamount">
          {billAmount && tipPercentage && numberOfPeople
            ? numberFormat(tipPerPerson)
            : "£0.00"}
        </p>
        <div className="totalperperson">
          <p>Total</p>
          <p className="per">/person</p>
        </div>
        <p className="totalamount">
          {billAmount && tipPercentage && numberOfPeople
            ? numberFormat(totalPerPerson)
            : "£0.00"}
        </p>
        <button
          className="reset"
          onClick={() => {
            setBillAmount("");
            setPercentage("");
            setNumberOfPeople("");
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
};

export default DisplayTip;
