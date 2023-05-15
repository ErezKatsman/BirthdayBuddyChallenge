import {useState} from "react";
import data from "./data.js"
import Person from "./components/Person.jsx";
import List from "./components/List.jsx";

const App = () => {

  const [people, setPeople] = useState(data);

  const clearAllHandle = () => {
      setPeople([]);
  }

  return (
      <main>
        <div className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people}/>
            <button className='btn btn-block' onClick={clearAllHandle}>
                clear all
            </button>
        </div>
      </main>
  );
};
export default App;
