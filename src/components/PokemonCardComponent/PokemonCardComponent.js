import React from 'react'
import './PokemonCardComponent.scss'

const PokemonCardComponent = ({title, imgUrl, body}) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imgUrl} alt={title}></img> 
      </div>
      <div className="card-title">
        <h3>{ title }</h3>
      </div>
      <div className="card-body">
        <p>{'type: ' + body.join(',')}</p>
      </div>
    </div>
  )
}

export default PokemonCardComponent;
