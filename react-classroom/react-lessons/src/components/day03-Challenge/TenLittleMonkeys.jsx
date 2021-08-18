// 1. Create a Functional Component called TenLittleMonkeys
// 2. Use useState to set the initial Monkey Count to 10
// 3. Display how many monkeys are left in a sentece that says the following...
// 10 little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!
// 4. Once the count gets to zero display "All the Monkeys fell off"
// 5. Button clicking should take 1 away from the total monkey counter

import React, { useState } from "react";

const TenLittleMonkeys = (props) => {
  const [monkey, setMonkey] = useState(10);
  const [isDisabled, setisDisabled] = useState(false);

  function handleClick(e) {
    console.log("Button Was Clicked");
    setMonkey(monkey - 1);
    if (monkey - 1 === 0) {
      setisDisabled(true);
    }
    console.log(monkey);
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isDisabled}>
        CLick ME
      </button>
      <p>
        {monkey} little monkeys jumping on the bed one fell off and hit his
        head. Mama called the doctor and the doctor said. No more monkeys
        jumping on the bed!
      </p>
      {monkey === 0 ? <p>All the Monkeys fell off</p> : null}
    </div>
  );
};

export default TenLittleMonkeys;
