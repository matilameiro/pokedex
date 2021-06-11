import React from 'react';
import pokeball from '../../assets/pokeballs/Pokeball.svg'

import './HeaderComponent.scss';

const HeaderComponent = ({ languages, initialLanguage, change }) => {
  
  const handleChange = ({ target }) => {
    change(target.value)
  }
  
  return (
    <>
      <div className="header">
        <div className="header__title">
          <img src={ pokeball } alt='pokeball'></img>
          <h2>POKEDEX</h2>
        </div>
        <div className="header__language">
          <select
            value={initialLanguage}
            onChange={ handleChange }
          >
            {
              languages.map((language) => (
                <option 
                  key={language.name} 
                  value={language.name}
                > 
                  { language.name } 
                </option>
              ))
            }
          </select>
        </div>
      </div>
      {/* <div className="sub-header"></div> */}
    </>
  )
}

export default HeaderComponent;