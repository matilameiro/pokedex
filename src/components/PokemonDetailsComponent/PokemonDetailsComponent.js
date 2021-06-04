import React from 'react';
import './PokemonDetailsComponent.scss';

const PokemonDetailsComponent = ({images, name, type}) => {
  return (
    <div className="pokemon-details">
      {
        <div className="pokemon-details__images">
          <img src={images} alt={ "alt-" + name }></img>
        </div>
      }
      <div className="pokemon-details__description">
        { name && <h4>{name}</h4> }
        {
          type && <p>{'type: ' + type}</p>
        }
      </div>
    </div>
  )
}

export default PokemonDetailsComponent;