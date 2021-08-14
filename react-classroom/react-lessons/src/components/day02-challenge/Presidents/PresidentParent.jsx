import PresidentChild from "./PresidentChild";
import { presidentsArray } from "./presidents.constant";
//President Child is responsible for displaying the information

//President Parent its responsible for using the map
// feature and have it call the child

//Bronze: See if you can display all the presidents first and last name by using the .map
//Silver: create a filtered Array of so that the child will only display the presidents that are alive(map and filter)
//Gold: Display all presidents and have died and display the age that they did die

function PresidentParent(props) {
  const filteredArry = presidentsArray.filter(
    (president) => president.passed == undefined
  );

  return (
    <div>
      let presidentlist ={" "}
      {presidentsArray.map((president) => (
        <PresidentChild firstName={president.first} lastName={president.last} />
      ))}
    </div>
  );
}

export default PresidentParent;
