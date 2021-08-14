//import logo from "./logo.svg";
import "./App.css";
// import ParentComponent from "./components/day02-challenge/Votes/ParentComponent";
// import PresidentParent from "./components/day02-challenge/Presidents/PresidentParent";

import ClickCounter from "./components/day02-challenge/ClickCounter/ClickCounter";

function App() {
  //This is a comment
  const welcomeName = "Marcus";
  //const phrase = "I wasn't alive then";

  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}!!!</h1>
      {/* <ParentComponent phrase={phrase} />
      <PresidentParent /> */}
      <ClickCounter />
    </div>
  );
}

export default App;
