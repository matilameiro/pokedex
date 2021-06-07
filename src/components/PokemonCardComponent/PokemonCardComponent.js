import React from 'react'
import './PokemonCardComponent.scss'

const PokemonCardComponent = ({ pokemon, showDetail }) => {
  const handlerClikCard = (e) => {
    e.preventDefault();
    showDetail(pokemon)
  }

  return (
    <div className="card-container" onClick={handlerClikCard}>
      <div className="card-container__image">
        <img src={pokemon.image_dream_world ? pokemon.image_dream_world : pokemon.image_default} alt={pokemon.name}></img>
      </div>
      <div className="card-container__description">
        <div className="card-container__description__title">
          <h2><strong>{pokemon.name}</strong></h2>
        </div>
      </div>
    </div>
  )
}

export default PokemonCardComponent;
