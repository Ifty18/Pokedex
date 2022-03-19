import { useState } from 'react';
import pokemons from '../data/data.json';
import TitleBar from "./TitleBar.jsx";
import Card from "../js/Card.jsx";


const StartPage = function StartPage( pokemon ) { 
  // receive the message from the page
  // filter the cards, change their "show" value to true or false
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  //to do:
  const handleSearch = (searchTerm) =>{
    const filteredPokemon = pokemons.filter((pokemon) => {
      for (const type of pokemon.types) {
        if (
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pokemon.id.toString().includes(searchTerm) ||
          type.type.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
    setFilteredPokemons(filteredPokemon);
  }
  // let visibility = {visibility: value};

  return (
    <div id="App">
    <TitleBar />
    <div>
      <input id = "searchBar" placeholder = "search pokemon name, number or type.." onChange={(event) => handleSearch(event.target.value)}></input>
    </div>
      <div id="cardsContainer">
        {filteredPokemons.map(pokemon => (
        <Card pokemon={pokemon}/>
        ))}
      </div>
  </div>
  );
};

export default StartPage;
