//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/day01-challenge/Header";
import AboutMe from "./components/day01-challenge/AboutMe";
import StudentInformation from "./components/day01-challenge/StudentInformation";
import Footer from "./components/day01-challenge/footer";

function App() {
  //This is a comment
  const welcomeName = "Marcus";
  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}</h1>
      <h2>We just modified our root App component</h2>
      <Header />
      <h3>Create the following...</h3>
      <ul>
        <li>
          Create new component in the day01-challenges folder called AboutMe
        </li>
        <li>h1 tag with your name</li>
        <li>p tag with the following i grew up in city/state</li>
        <li>have an unordered list with 3 places you have vistited</li>
      </ul>
      <AboutMe />
      <StudentInformation studentName="Pam" grade="B" subject="Math" />
      <StudentInformation studentName="Tom" grade="A" subject="English" />
      <StudentInformation studentName="Frank" grade="F" subject="History" />
      <Footer />
    </div>
  );
}

export default App;
