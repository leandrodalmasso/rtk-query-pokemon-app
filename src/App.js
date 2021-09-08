import React from 'react';
import './App.css';
import Pokemon from "./Pokemon";

export default function App() {
  const pokemons = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur'];

  return (
    <div className="App">
      {pokemons.map((name, i) => <Pokemon name={name} key={i} />)}
    </div>
  )
}
