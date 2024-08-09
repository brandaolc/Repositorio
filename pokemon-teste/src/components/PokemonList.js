import React, { useEffect, useState } from 'react';
import '../styles/PokemonList.css';
import axios from 'axios';


const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      setPokemonList(response.data.results); 
    };

    fetchPokemon(); 
  }, []); 

  return (
    <div className="pokemon-list">
      <h2>Pokémon List</h2>
      <ul>
       
        {pokemonList.map((pokemon, index) => (
          <Pokemon key={index} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};


const Pokemon = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null); 


  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await axios.get(pokemon.url); 
      setPokemonData(response.data); 
    };

    fetchPokemonData(); 
  }, [pokemon]); 

  
  if (!pokemonData) return null;

 
  return (
    <li className="pokemon-item">
      <img src={pokemonData.sprites.front_default} alt={pokemon.name} /> {/* Imagem do pokemon */}
      <span>{pokemon.name}</span> {/* Nome do pokemon */}
    </li>
  );
};

export default PokemonList; 
