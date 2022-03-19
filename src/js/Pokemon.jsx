import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import TitleBar from "./TitleBar.jsx";
import pokemons from '../data/data.json';


const Pokemon = function Pokemon( props ) {
  const param = useParams(); //param stores the id of the pokemon. We will use it to search for the respective pokemon in the JSON file
  let selectedPokemonId = param.pokemonId;
  let pokemonIndex; // it will store the index of the pokemon in the data.json file (if the pokemon id is valid);
  let found = false; // the value changes to true when a pokemon with the respective id is found
  for ( let index in pokemons ){ // parsing the pokemons list
      if(pokemons[index].id.toString() === selectedPokemonId.toString()){
        found = true;
        pokemonIndex = index;
      }
      if( found === true ){
        break;
      }
    }

    if( found === false ) { //if the pokemon does not exist
      //TO DO: snorlax return page
      return (
        <div >
          <Link to="/" className="cardAnchorTag"> <h1 id="pokemon-does-not-exist-message">Pokemon does not exist. Go back to homepage</h1> </Link>
          <img id="snorlax" alt="snorlax error page" src="https://dazzling-panini-599909.netlify.app/static/media/snorlax_404.116af90a27db7b4bead3.png"></img>
        </div>
      );
    }

  let id = pokemons[pokemonIndex].id;
  let rawid = id;
  id = id.toString();
  if (id.length === 1){
    id = "#00" + id;
  } else if (id.length === 2){
    id = "#0" + id;
  } else if (id.length === 3){
    id = "#" + id;
  }

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
    //each pokemon has either one or two arguments
    // let numberOfAttributes =  pokemon.pokemon.pokemon.types.length;
    // if (numberOfAttributes === 1){
    //   let attribute1 = pokemon.pokemon.pokemon.types[0].type.name;
    //   return (
    //     <div className="cardAttributes">
    //       <h1 id="attributeBox">{attribute1}</h1>
    //     </div>
        
    //   );
    // } else if (numberOfAttributes === 2) {
    //   let attribute1 = pokemon.pokemon.pokemon.types[0].type.name;
    //   let attribute2 = pokemon.pokemon.pokemon.types[1].type.name;
    //   return (
    //     <div>
    //       <h1 id="attributeBox">{attribute1}</h1>
    //       <h1 id="attributeBox">{attribute2}</h1>
    //     </div>
    //   );
    // }

    let numberOfAttributes = pokemons[pokemonIndex].types.length;
    if( numberOfAttributes === 1 ){
      let attribute1 = pokemons[pokemonIndex].types[0].type.name;
      // console.log(attribute1);
      return (
        <div>
          <h1 id="attributeBox">{attribute1}</h1>
        </div>
      );
    } else {
      let attribute1 = pokemons[pokemonIndex].types[0].type.name;
      let attribute2 = pokemons[pokemonIndex].types[1].type.name;
      // console.log(attribute1);
      // console.log(attribute2);
      return (
        <div className="inline-attributes">
          <h1 id="attributeBox" className="pokemon-details-attributes">{attribute1}</h1>
          <h1 id="attributeBox" className="pokemon-details-attributes">{attribute2}</h1>
        </div>
      );
    }
    return (
      <h1>
        hello
      </h1>
    );
  }


  let image = pokemons[pokemonIndex].sprites.other.official_artwork.front_default;
  let frontFemale = pokemons[pokemonIndex].sprites.front_shiny;
  let backFemale = pokemons[pokemonIndex].sprites.back_shiny;
  let frontMale = pokemons[pokemonIndex].sprites.front_default; 
  let backMale = pokemons[pokemonIndex].sprites.back_default;
  let color = pokemons[pokemonIndex].types[0].type.name;

  function CheckIfPokemonExists(givenId) {
    let selectedPokemonId = givenId;
    let pokemonIndex; // it will store the index of the pokemon in the data.json file (if the pokemon id is valid);
    let found = false; // the value changes to true when a pokemon with the respective id is found
    for ( let index in pokemons ){ // parsing the pokemons list
      if(pokemons[index].id.toString() === selectedPokemonId.toString()){
        found = true;
        pokemonIndex = index;
      }
      if( found === true ){
        break;
      }
    }

    if( found === false ) { //if the pokemon does not exist
      return -1;
    } else {
      return pokemonIndex;
    }
  }

  function PokemonEvolutions (){
    let threeEvolutions = false;
    let ev1Name;
    let ev1Id;
    let ev1Img;
    let ev2Name;
    let ev2Id;
    let ev2Img;
    let ev3Name;
    let ev3Id;
    let ev3Img;

    function AssignEvolutionValues (n1, id1, img1, n2, id2, img2, n3, id3, img3) {
      ev1Name = n1;
      ev1Id = id1;
      ev1Img = img1;
      ev2Name = n2;
      ev2Id = id2;
      ev2Img = img2;
      ev3Name = n3;
      ev3Id = id3;
      ev3Img = img3;
    }

    if(rawid%3 === 1){ //if this is the first evolution
      console.log(CheckIfPokemonExists(rawid+1));
      console.log(CheckIfPokemonExists(rawid+2));
      if(CheckIfPokemonExists(rawid+1) !== -1 && CheckIfPokemonExists(rawid+2) !== -1){
        let p1 = CheckIfPokemonExists(rawid);
        let p2 = CheckIfPokemonExists(rawid+1);
        let p3 = CheckIfPokemonExists(rawid+2);
        threeEvolutions = true;
        AssignEvolutionValues(pokemons[p1].name, BeautifyId(pokemons[p1].id), pokemons[p1].sprites.other.official_artwork.front_default,pokemons[p2].name, BeautifyId(pokemons[p2].id), pokemons[p2].sprites.other.official_artwork.front_default,pokemons[p3].name, BeautifyId(pokemons[p3].id), pokemons[p3].sprites.other.official_artwork.front_default)
      }
    }

    if(rawid%3 === 2){ //if this is the first evolution
      console.log(CheckIfPokemonExists(rawid-1));
      console.log(CheckIfPokemonExists(rawid+1));
      if(CheckIfPokemonExists(rawid-1) !== -1 && CheckIfPokemonExists(rawid+1) !== -1){
        let p1 = CheckIfPokemonExists(rawid-1);
        let p2 = CheckIfPokemonExists(rawid);
        let p3 = CheckIfPokemonExists(rawid+1);
        threeEvolutions = true;
        AssignEvolutionValues(pokemons[p1].name, BeautifyId(pokemons[p1].id), pokemons[p1].sprites.other.official_artwork.front_default,pokemons[p2].name, BeautifyId(pokemons[p2].id), pokemons[p2].sprites.other.official_artwork.front_default,pokemons[p3].name, BeautifyId(pokemons[p3].id), pokemons[p3].sprites.other.official_artwork.front_default)
      }
    }

    if(rawid%3 === 0){ //if this is the first evolution
      console.log(CheckIfPokemonExists(rawid-2));
      console.log(CheckIfPokemonExists(rawid-1));
      if(CheckIfPokemonExists(rawid-2) !== -1 && CheckIfPokemonExists(rawid-1) !== -1){
        let p1 = CheckIfPokemonExists(rawid-2);
        let p2 = CheckIfPokemonExists(rawid-1);
        let p3 = CheckIfPokemonExists(rawid);
        threeEvolutions = true;
        AssignEvolutionValues(pokemons[p1].name, BeautifyId(pokemons[p1].id), pokemons[p1].sprites.other.official_artwork.front_default,pokemons[p2].name, BeautifyId(pokemons[p2].id), pokemons[p2].sprites.other.official_artwork.front_default,pokemons[p3].name, BeautifyId(pokemons[p3].id), pokemons[p3].sprites.other.official_artwork.front_default)
      }
    }

    if(threeEvolutions){ //if we have 3 evolutions
    return(
      <div id="evolutions-box"className={`${color}`}>
        <div className="evolution-card">
          <h4 className="evolution-pokemon-name">
            {ev1Name}
          </h4>
          <h5 className="evolution-id">
            {ev1Id}
          </h5>
          <img className="evolution-img" src={ev1Img} alt="first-evolution" />
        </div>
        <div className="evolution-card">
          <h4 className="evolution-pokemon-name">
            {ev2Name}
          </h4>
          <h5 className="evolution-id">
            {ev2Id}
          </h5>
          <img className="evolution-img" src={ev2Img} alt="first-evolution" />
        </div>
        <div className="evolution-card">
          <h4 className="evolution-pokemon-name">
            {ev3Name}
          </h4>
          <h5 className="evolution-id">
            {ev3Id}
          </h5>
          <img className="evolution-img" src={ev3Img} alt="first-evolution" />
        </div>
      </div>
    );} else {
      return(
        <div id="evolutions-box"className={`${color} single-evolution-box`}>
          <div className="single-evolution-card">
            <h4 className="evolution-pokemon-name">
              {pokemons[pokemonIndex].name}
            </h4>
            <h5 className="evolution-id">
              {BeautifyId(pokemons[pokemonIndex].id)}
            </h5>
            <img className="evolution-img" src={image} alt="first-evolution" />
          </div>
        </div>
      );
    }
  }

  //finding the 


  return (
    <div id="App">
      <Link to="/" className="cardAnchorTag"><TitleBar /></Link>
      {/* <p className="paragraphTest">{param.pokemonId}</p> */}
      <div className="center-wrapper">
        <div id="page-top-side">
          <div id="big-left-card" className={`${color}`}>
            <div id="details-card-header" className="inline-attributes">
              <div>
                <h2 id="details-pokemon-name">
                  {pokemons[pokemonIndex].name}
                </h2>
                <h4 id="details-pokemon-id">
                  {id}
                </h4>
              </div>
              <div id="attributes">
                <Attributes/>
              </div>
            </div>
            <div>
              <img src={image} id="pokemon-details-big-picture" alt="pokemon-big"></img>
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
            <div id="stats-box" className={`${color}`}>
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
        <div id="page-down-side" className={`${color}`}>
          <div>
            <h2 id="bottom-card-title">Sprites</h2>
          </div>
          <div id="bottom-card-footer">
            <div>
              <h3 className="front-back-titles">Front female</h3>
              <img src={frontFemale} className="front-back-image" alt="front female"></img>
            </div>
            <div>
              <h3 className="front-back-titles">Back female</h3>
              <img src={backFemale} className="front-back-image" alt="back female"></img>
            </div>
            <div>
              <h3 className="front-back-titles">Front male</h3>
              <img src={frontMale} className="front-back-image" alt="back female"></img>
            </div>
            <div>
              <h3 className="front-back-titles">Back male</h3>
              <img src={backMale} className="front-back-image" alt="back female"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;