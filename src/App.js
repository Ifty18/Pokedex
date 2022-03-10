// importing css files
import "./css/App.css";
import "./css/TitleBar.css";
import "./css/SearchBar.css";
import "./css/CardsContainer.css";

// importing js files
import TitleBar from "./js/TitleBar.js";
// import SearchBar from "./js/SearchBar.js";
import Card from "./js/Card.js";

// importing the json data file
import pokemons from './data/data.json';

// importing other libraries
import { useState } from 'react';

function App() {
  // receive the message from the page
  // filter the cards, change their "show" value to true or false
  const [value, setValue] = useState();
  //to do:

  let visibility = {visibility: value};
  return (
    <div id="App">
      <TitleBar />
      <div>
        <input id = "searchBar" placeholder = "search pokemon name, number or type.." onChange={(event) => setValue(event.target.value)}></input>
      </div>
      <div id="cardsContainer">
        {pokemons.map(pokemon => (
         <Card pokemon={pokemon} visibility={visibility}/> 
        ))}
      </div>
    </div>
  );
}

export default App;
