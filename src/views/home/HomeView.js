import React, { useState } from 'react'
import PokemonListComponent from '../../components/PokemonListComponent/PokemonListComponent';

import './HomeView.scss'

const HomeView = () => {
  // const [pokemons, setPokemons] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  return (
    <div className="home-view">
      <PokemonListComponent></PokemonListComponent>
    </div>
  )
};

export default HomeView;
