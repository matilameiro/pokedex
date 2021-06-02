import React, { useEffect, useState } from 'react'
import PokemonListComponent from '../../components/PokemonListComponent/PokemonListComponent'

const HomeView = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div style={{padding: '1rem 2rem'}}>
      <PokemonListComponent></PokemonListComponent>
    </div>
  )
};

export default HomeView;
