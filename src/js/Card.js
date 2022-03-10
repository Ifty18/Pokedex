const Card = function Card( pokemon ) { 
  //storing the name of the pokemon
  let text = pokemon.visibility.visibility;
  const name = pokemon.pokemon.name;
  // console.log(pokemon);
  // console.log(text);
  //we have to see if the card can be shown or not
  let display = "visible";
  if ((text !== "") && (name.toLowerCase().search(text) === -1) && (pokemon.pokemon.types[0].type.name.toLowerCase().search(text) === -1)){
    display = "invisible";
  }

  //if the input has not been hidden yet && input is a number && text != pokemon id then hide
  // if(pokemon.pokemon.name === "charmander"){
  //   console.log(String(pokemon.pokemon.id));
  //   console.log(text);
  // }
  // console.log(isNaN(text));

  //TO DO: de verificat id urile
  // if(display === "visible" && text !== "" && !(isNaN(text)) && String(text) !== String(pokemon.pokemon.id)){
  //   display = "invisible";
  // }

  //the pokemon id must look like this #023
  //since they have different lenghts, we must treat every scenario
  let id = pokemon.pokemon.id;
  id = id.toString();
  if (id.length === 1){
    id = "#00" + id;
  } else if (id.length === 2){
    id = "#0" + id;
  } else if (id.length === 3){
    id = "#" + id;
  }

  //getting the picture
  const image = pokemon.pokemon.sprites.other.official_artwork.front_default;

  //building the Attributes component
  function Attributes (pokemon){
    //each pokemon has either one or two arguments
    let numberOfAttributes =  pokemon.pokemon.pokemon.types.length;
    if (numberOfAttributes === 1){
      let attribute1 = pokemon.pokemon.pokemon.types[0].type.name;
      return (
        <div className="cardAttributes">
          <h1 id="attributeBox">{attribute1}</h1>
        </div>
        
      );
    } else if (numberOfAttributes === 2) {
      let attribute1 = pokemon.pokemon.pokemon.types[0].type.name;
      let attribute2 = pokemon.pokemon.pokemon.types[1].type.name;
      return (
        <div>
          <h1 id="attributeBox">{attribute1}</h1>
          <h1 id="attributeBox">{attribute2}</h1>
        </div>
      );
    }
  }

  //the variable "color" will store the className of the card. This action is needed since each pokemon attribute has a specific color. Ex: grass-green, fire-orange, water-blue, etc.
  let color = pokemon.pokemon.types[0].type.name;
  

  return (
  <div className={`card ${color} ${display}`} id="card1">
    <div className="cardHeader">
      <h2>{name}</h2>
      <h2>{id}</h2>
    </div>
    <div className="cardBody">
      <Attributes pokemon={pokemon}/>
      <img src={image} id="image" alt="pokemon"></img>
    </div>
  </div>
  );
};

export default Card;
