import React from 'react'

const PokemonCardComponent = ({title, imgUrl, body}) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img style={{ overflow: 'hidden', height: '200px' }}></img> 
      </div>
      <div className="card-title">
        <h3>{ title }</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="bt">
        <button>
          <a>
            View More
          </a>
        </button>
      </div>
    </div>
  )
}

export default PokemonCardComponent;
