import React from 'react'
import './PokemonCardComponent.scss'

const PokemonCardComponent = ({ pokemon, showDetail }) => {
  const handlerClikCard = (e) => {
    e.preventDefault();
    showDetail(pokemon)
  }

  return (
    <div className="card-container" onClick={handlerClikCard}>
      <div className="image-container">
        <img src={pokemon.image} alt={pokemon.name}></img> 
      </div>
      <div className="card-title">
        <h3>{ pokemon.name }</h3>
      </div>
      <div className="card-body">
        <p>{'type: ' + pokemon.type.join(',')}</p>
      </div>
    </div>
  )
}

export default PokemonCardComponent;
