import { useState, useContext, useEffect, useCallback } from 'react';
// import pokemons from '../data/data.json';
import TitleBar from "./TitleBar.jsx";
import Card from "../js/Card.jsx";
import PokemonStore from '../store/pokemonsStore';
import axios from "axios";

const pokemonsOnPage = 15;

const StartPage = function StartPage( pokemon ) { 
  // receive the message from the page
  // filter the cards, change their "show" value to true or false

  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState(pokemons);
  const {count, increment} = useContext(PokemonStore);
  const [loading, setLoading] = useState(true);


  const fetchPokemonData = useCallback(async () => {
    const promiseArr = [];
    for (
      let i = pokemons.length + 1;
      i <= pokemons.length + pokemonsOnPage + count;
      i++
    ) {
      promiseArr.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }
    const resolvedData = await Promise.all(promiseArr);
    return resolvedData.map((data) => data.data);
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const resp = await fetchPokemonData();
      setPokemons(resp);
      setFilteredPokemon(resp);
      setLoading(false);
    };
    fetchData();

    // Clean up
    return () => {
      setPokemons([]);
      setFilteredPokemon([]);
    };
  }, []);


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
    setFilteredPokemon(filteredPokemon);
  }

  ( () => {
    console.log("hhhhhhhhhhhh");
  })();
  
  console.log(filteredPokemon);
  return (
    <div id="App">
      <TitleBar />
      <div>
        <input id = "searchBar" placeholder = "search pokemon name, number or type.." onChange={(event) => handleSearch(event.target.value)}></input>
      </div>
      <div id="cardsContainer">
        {filteredPokemon.map(pokemon => (
        <Card pokemon={pokemon}/>
        ))}
      </div>
      <div>
        {count}
      </div>
      <button id="load-more-pokemons" onClick={() => {
        increment(); 
        fetchPokemonData().then((newPokemons) => {
          setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
          setFilteredPokemon((prevPokemons) => [...prevPokemons, ...newPokemons]);});
      }}>Load 15 more pokemons</button>
  </div>
  );
};

export default StartPage;
