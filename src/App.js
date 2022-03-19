// importing css files
import "./css/App.css";
import "./css/TitleBar.css";
import "./css/SearchBar.css";
import "./css/CardsContainer.css";
import "./css/PokemonDetails.css";

import StartPage from "./js/StartPage";
import Pokemon from "./js/Pokemon";
import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;