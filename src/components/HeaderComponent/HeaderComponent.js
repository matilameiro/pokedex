import React from 'react';
import pokeball from '../../assets/pokeballs/Pokeball.svg'

import './HeaderComponent.scss';

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="header__title">
          <img src={ pokeball } alt='pokeball'></img>
          <h2>POKEDEX</h2>
        </div>
        {/* <div className="header__language">
          <select>
            <option value="spanish"> Español </option>
            <option value="English"> English </option>
          </select>
        </div> */}
      </div>
      {/* <div className="sub-header"></div> */}
    </>
  )
}

export default HeaderComponent;