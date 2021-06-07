import React from 'react';
import PokemonListComponent from '../../components/PokemonListComponent/PokemonListComponent';

import './HomeView.scss'

const HomeView = () => {
  return (
    <div className="home-view">
      <PokemonListComponent></PokemonListComponent>
    </div>
  )
};

export default HomeView;
