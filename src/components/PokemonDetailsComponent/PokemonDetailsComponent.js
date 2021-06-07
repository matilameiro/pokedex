import React from 'react';
import './PokemonDetailsComponent.scss';

const PokemonDetailsComponent = ({pokemon}) => {

  const deleteMiddleDash = (name) => {
    return name.replace('-', ' ')
  }

  return (
    <div className="pokemon-details">
      <div className="pokemon-details__header"></div>
      <div className="image">
        <img 
          src={pokemon.image_dream_world ? pokemon.image_dream_world : pokemon.image_default} 
          alt={"alt-" + pokemon.name}>
        </img>
      </div>
      <div className="pokemon-details__content">
        <div>
          <h1 className="pokemon-details__content__title">{pokemon.name}</h1>
        </div>
        <div className="pokemon-details__content__stats">
          {
            pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="pokemon-details__content__stats__stat">
                <span className="pokemon-details__content__stats__stat__value">{stat.base_stat}</span>
                <span className="pokemon-details__content__stats__stat__name"><strong>{deleteMiddleDash(stat.stat.name)}</strong> </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PokemonDetailsComponent;