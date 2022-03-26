import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import TitleBar from "./TitleBar.jsx";
// import pokemons from '../data/data.json';
import { useEffect, useState } from "react";
import axios from "axios";


const Pokemon = function Pokemon( props ) {
  const param = useParams(); //param stores the id of the pokemon. We will use it to search for the respective pokemon in the JSON file
  let selectedPokemonId = param.pokemonId;
  let pokemonIndex; // it will store the index of the pokemon in the data.json file (if the pokemon id is valid);
  let found = false; // the value changes to true when a pokemon with the respective id is found


  // for ( let index in pokemons ){ // parsing the pokemons list
  //     if(pokemons[index].id.toString() === selectedPokemonId.toString()){
  //       found = true;
  //       pokemonIndex = index;
  //     }
  //     if( found === true ){
  //       break;
  //     }
  //   }

    const [pokemonId, setPokemonId] = useState(null);
    const [pokemonName, setPokemonName] = useState(null);
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        const result = await axios("https://pokeapi.co/api/v2/pokemon/" + param.pokemonId);
  
       console.log(result.data);

      //  if (! result.data ) {
      //   return (
      //     <div >
      //       <Link to="/" className="cardAnchorTag"> <h1 id="pokemon-does-not-exist-message">Pokemon does not exist. Go back to homepage</h1> </Link>
      //       <img id="snorlax" alt="snorlax error page" src="https://dazzling-panini-599909.netlify.app/static/media/snorlax_404.116af90a27db7b4bead3.png"></img>
      //     </div>
      //   );
      //  }

       setPokemonData(result.data);
       setPokemonName(result.data.name);
       setPokemonId(BeautifyId(result.data.id));
       setLoading(false);
      };

      fetchData();
    }, []);


  function BeautifyId (id){
    id = id.toString();
  if (id.length === 1){
    id = "#00" + id;
  } else if (id.length === 2){
    id = "#0" + id;
  } else if (id.length === 3){
    id = "#" + id;
  }
  return id;
  }

  function Attributes (){
    if( pokemonData.types.length === 1 ){ 
      return (
        <div>
          <h1 id="attributeBox">{pokemonData.types[0].type.name}</h1>
        </div>
      );
    } else {
      return (
        <div className="inline-attributes">
          <h1 id="attributeBox" className="pokemon-details-attributes">{pokemonData.types[0].type.name}</h1>
          <h1 id="attributeBox" className="pokemon-details-attributes">{pokemonData.types[1].type.name}</h1>
        </div>
      );
    }
  }


  // function CheckIfPokemonExists(givenId) {
  //   let selectedPokemonId = givenId;
  //   let pokemonIndex; // it will store the index of the pokemon in the data.json file (if the pokemon id is valid);
  //   let found = false; // the value changes to true when a pokemon with the respective id is found
  //   for ( let index in pokemons ){ // parsing the pokemons list
  //     if(pokemons[index].id.toString() === selectedPokemonId.toString()){
  //       found = true;
  //       pokemonIndex = index;
  //     }
  //     if( found === true ){
  //       break;
  //     }
  //   }

  //   if( found === false ) { //if the pokemon does not exist
  //     return -1;
  //   } else {
  //     return pokemonIndex;
  //   }
  // }

  function PokemonEvolutions (){
    return (
      <div>
        <h1> hello world </h1>
      </div>
    );
  }

  // function PokemonEvolutions (){
  //   let threeEvolutions = false;
  //   let ev1Name;
  //   let ev1Id;
  //   let ev1Img;
  //   let ev2Name;
  //   let ev2Id;
  //   let ev2Img;
  //   let ev3Name;
  //   let ev3Id;
  //   let ev3Img;

  //   function AssignEvolutionValues (n1, id1, img1, n2, id2, img2, n3, id3, img3) {
  //     ev1Name = n1;
  //     ev1Id = id1;
  //     ev1Img = img1;
  //     ev2Name = n2;
  //     ev2Id = id2;
  //     ev2Img = img2;
  //     ev3Name = n3;
  //     ev3Id = id3;
  //     ev3Img = img3;
  //   }

  //   if(rawid%3 === 1){ //if this is the first evolution
  //     // console.log(CheckIfPokemonExists(rawid+1));
  //     // console.log(CheckIfPokemonExists(rawid+2));
  //     if(CheckIfPokemonExists(rawid+1) !== -1 && CheckIfPokemonExists(rawid+2) !== -1){
  //       let p1 = CheckIfPokemonExists(rawid);
  //       let p2 = CheckIfPokemonExists(rawid+1);
  //       let p3 = CheckIfPokemonExists(rawid+2);
  //       threeEvolutions = true;
  //       AssignEvolutionValues(pokemons[p1].name, BeautifyId(pokemons[p1].id), pokemons[p1].sprites.other.official_artwork.front_default,pokemons[p2].name, BeautifyId(pokemons[p2].id), pokemons[p2].sprites.other.official_artwork.front_default,pokemons[p3].name, BeautifyId(pokemons[p3].id), pokemons[p3].sprites.other.official_artwork.front_default)
  //     }
  //   }

  //   if(rawid%3 === 2){ //if this is the first evolution
  //     console.log(CheckIfPokemonExists(rawid-1));
  //     console.log(CheckIfPokemonExists(rawid+1));
  //     if(CheckIfPokemonExists(rawid-1) !== -1 && CheckIfPokemonExists(rawid+1) !== -1){
  //       let p1 = CheckIfPokemonExists(rawid-1);
  //       let p2 = CheckIfPokemonExists(rawid);
  //       let p3 = CheckIfPokemonExists(rawid+1);
  //       threeEvolutions = true;
  //       AssignEvolutionValues(pokemons[p1].name, BeautifyId(pokemons[p1].id), pokemons[p1].sprites.other.official_artwork.front_default,pokemons[p2].name, BeautifyId(pokemons[p2].id), pokemons[p2].sprites.other.official_artwork.front_default,pokemons[p3].name, BeautifyId(pokemons[p3].id), pokemons[p3].sprites.other.official_artwork.front_default)
  //     }
  //   }

  //   if(rawid%3 === 0){ //if this is the first evolution
  //     console.log(CheckIfPokemonExists(rawid-2));
  //     console.log(CheckIfPokemonExists(rawid-1));
  //     if(CheckIfPokemonExists(rawid-2) !== -1 && CheckIfPokemonExists(rawid-1) !== -1){
  //       let p1 = CheckIfPokemonExists(rawid-2);
  //       let p2 = CheckIfPokemonExists(rawid-1);
  //       let p3 = CheckIfPokemonExists(rawid);
  //       threeEvolutions = true;
  //       AssignEvolutionValues(pokemons[p1].name, BeautifyId(pokemons[p1].id), pokemons[p1].sprites.other.official_artwork.front_default,pokemons[p2].name, BeautifyId(pokemons[p2].id), pokemons[p2].sprites.other.official_artwork.front_default,pokemons[p3].name, BeautifyId(pokemons[p3].id), pokemons[p3].sprites.other.official_artwork.front_default)
  //     }
  //   }

  //   if(threeEvolutions){ //if we have 3 evolutions
  //   return(
  //     <div id="evolutions-box"className={`${pokemonData.types[0].type.name}`}>
  //       <div className="evolution-card">
  //         <h4 className="evolution-pokemon-name">
  //           {ev1Name}
  //         </h4>
  //         <h5 className="evolution-id">
  //           {ev1Id}
  //         </h5>
  //         <img className="evolution-img" src={ev1Img} alt="first-evolution" />
  //       </div>
  //       <div className="evolution-card">
  //         <h4 className="evolution-pokemon-name">
  //           {ev2Name}
  //         </h4>
  //         <h5 className="evolution-id">
  //           {ev2Id}
  //         </h5>
  //         <img className="evolution-img" src={ev2Img} alt="first-evolution" />
  //       </div>
  //       <div className="evolution-card">
  //         <h4 className="evolution-pokemon-name">
  //           {ev3Name}
  //         </h4>
  //         <h5 className="evolution-id">
  //           {ev3Id}
  //         </h5>
  //         <img className="evolution-img" src={ev3Img} alt="first-evolution" />
  //       </div>
  //     </div>
  //   );} else {
  //     return(
  //       <div id="evolutions-box"className={`${pokemonData.types[0].type.name} single-evolution-box`}>
  //         <div className="single-evolution-card">
  //           <h4 className="evolution-pokemon-name">
  //             {pokemonName}
  //           </h4>
  //           <h5 className="evolution-id">
  //             {BeautifyId(pokemonId)}
  //           </h5>
  //           <img className="evolution-img" src={pokemonData.sprites.other["official-artwork"].front_default} alt="first-evolution" />
  //         </div>
  //       </div>
  //     );
  //   }
  // }



  return (
    <div id="App">
      
      <Link to="/" className="cardAnchorTag"><TitleBar /></Link>
      {/* <p className="paragraphTest">{param.pokemonId}</p> */}
      { loading ? ( <h1>Loading...</h1> ) : ( 
        <div className="center-wrapper">
          <div id="page-top-side">
            <div id="big-left-card" className={`${pokemonData.types[0].type.name}`}>
              <div id="details-card-header" className="inline-attributes">
                <div>
                  <h2 id="details-pokemon-name"> {pokemonName} </h2>
                  <h4 id="details-pokemon-id">
                    {pokemonId}
                  </h4>
                </div>
                <div id="attributes">
                  <Attributes/>
                </div>
              </div>
              <div>
                {loading ? ( <h1>Loading...</h1>) : (
                <img src={pokemonData.sprites.other["official-artwork"].front_default} id="pokemon-details-big-picture" alt="pokemon-big"></img>
                )}
                </div>
              <div id="left-big-card-footer">
                <p className="footer-paragraph">this</p>
                <p className="footer-paragraph">pokemon</p>
                <p className="footer-paragraph">is</p>
                <p className="footer-paragraph">really</p>
                <p className="footer-paragraph">amazing</p>
              </div>
              
            </div>
            <div id="right-top-side">
              <div id="text-box">
                <h2>
                  Description
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ut minus ipsum repudiandae consequuntur corrupti maiores, autem qui eum iste molestiae unde quas, quis distinctio perferendis inventore perspiciatis et! Harum?
                </p>
              </div>
              <div id="stats-box" className={`${pokemonData.types[0].type.name}`}>
                <div className="stat-bar-wrapper">
                  <h4 className="stat-bar-title">HP</h4>
                  <div className="stat-bar-line"><div className="bar bar1"></div></div>
                  <h4 className="stat-bar-value">124</h4>
                </div>
                <div className="stat-bar-wrapper">
                  <h4 className="stat-bar-title">Attack</h4>
                  <div className="stat-bar-line"><div className="bar bar2"></div></div>
                  <h4 className="stat-bar-value">69</h4>
                </div>
                <div className="stat-bar-wrapper">
                  <h4 className="stat-bar-title">Defense</h4>
                  <div className="stat-bar-line"><div className="bar bar3"></div></div>
                  <h4 className="stat-bar-value">255</h4>
                </div>
                <div className="stat-bar-wrapper">
                  <h4 className="stat-bar-title">Speed</h4>
                  <div className="stat-bar-line"><div className="bar bar4"></div></div>
                  <h4 className="stat-bar-value">33</h4>
                </div>
                <div className="stat-bar-wrapper">
                  <h4 className="stat-bar-title">Special attack</h4>
                  <div className="stat-bar-line"><div className="bar bar5"></div></div>
                  <h4 className="stat-bar-value">85</h4>
                </div>
                <div className="stat-bar-wrapper">
                  <h4 className="stat-bar-title">Special defense</h4>
                  <div className="stat-bar-line"><div className="bar bar6"></div></div>
                  <h4 className="stat-bar-value">188</h4>
                </div>
              </div>

              
              <PokemonEvolutions/>

            </div>
          </div>
          <div id="page-down-side" className={`${pokemonData.types[0].type.name}`}>
            <div>
              <h2 id="bottom-card-title">Sprites</h2>
            </div>
            <div id="bottom-card-footer">
              <div>
                <h3 className="front-back-titles">Front female</h3>
                <img src={pokemonData.sprites.front_shiny} className="front-back-image" alt="front female"></img>
              </div>
              <div>
                <h3 className="front-back-titles">Back female</h3>
                <img src={pokemonData.sprites.back_shiny} className="front-back-image" alt="back female"></img>
              </div>
              <div>
                <h3 className="front-back-titles">Front male</h3>
                <img src={pokemonData.sprites.front_default} className="front-back-image" alt="back female"></img>
              </div>
              <div>
                <h3 className="front-back-titles">Back male</h3>
                <img src={pokemonData.sprites.back_default} className="front-back-image" alt="back female"></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokemon;