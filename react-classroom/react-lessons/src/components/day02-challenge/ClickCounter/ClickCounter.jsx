import React, { useState } from "react";

const ClickCounter = (props) => {
  //let count = 0;
  const [count, setCount] = useState(0);
  const [isDisabled, setisDisabled] = useState(false);

  function handleClick(e) {
    console.log("Button Was Clicked");
    setCount(count + 1);
    if (count + 1 === 10) {
      setisDisabled(true);
    }
    console.log(count);
  }
  return (
    <div>
      <button onClick={handleClick} disabled={isDisabled}>
        CLICK ME
      </button>
      <p>Current Count: {count}</p>
      {count > 9 ? <p>You clicked too many times</p> : null}
    </div>
  );
};

export default ClickCounter;
