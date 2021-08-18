import React, { useState } from "react";

const Calculator = (props) => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  function handleOnChange(e) {
    setNumber1(e.target.value);

    // number1 = e.target.value
    console.log(setNumber1);
  }

  function handleOnChange2(e) {
    setNumber2(e.target.value);
    console.log(setNumber2);
  }

  function handleClick(e) {
    // total = number1+ number 2
    setTotal(Number(number1) + +number2);
  }

  return (
    <div>
      <input
        type="number"
        label="Variable 1"
        value={number1}
        onChange={handleOnChange}
      />
      <input
        type="number"
        label="Variable 2"
        value={number2}
        onChange={handleOnChange2}
      />
      <button onClick={handleClick}>Get Total</button>
      <h2>Total = {total}</h2>
    </div>
  );
};

export default Calculator;
