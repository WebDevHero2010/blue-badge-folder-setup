// //import logo from "./logo.svg";
// import "./App.css";
// // import ParentComponent from "./components/day02-challenge/Votes/ParentComponent";
// // import PresidentParent from "./components/day02-challenge/Presidents/PresidentParent";

// import ClickCounter from "./components/day02-challenge/ClickCounter/ClickCounter";

// function App() {
//   //This is a comment
//   const welcomeName = "Marcus";
//   //const phrase = "I wasn't alive then";

//   return (
//     <div className="App">
//       <h1>Welecome to React, {welcomeName}!!!</h1>
//       {/* <ParentComponent phrase={phrase} />
//       <PresidentParent /> */}
//       <ClickCounter />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Calculator from "./components/day03-Challenge/Calculator/Calculator";
//import InputField from "./components/day03-Challenge/inputFieldDemo/inputField";
//import "./App.css";
//import TenLittleMonkeys from "./components/day03-Challenge/TenLittleMonkeys";

function App() {
  // This is a comment
  const welcomeName = "Rob!!!";

  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}</h1>
      {/* <TenLittleMonkeys /> */}
      {/* <InputField /> */}
      <Calculator />
    </div>
  );
}

export default App;
