
import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) =>{
      console.log(response.data.results);
      setPokemon(response.data.results);
    })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Pokemon</h1>
      <ul style={{textAlign:"center"}}> {pokemon.map ((poke, i) =>(
        <li key= {i}> {poke.name}</li>
      ))}
      </ul>

    </div>
  );
}

export default App;
