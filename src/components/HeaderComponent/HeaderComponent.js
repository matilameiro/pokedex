import React from 'react'

const HeaderComponent = () => {
  return (
    <div style={{
      height: '4rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      backgroundColor: 'red',
      boxShadow: '0px 5px 20px -10px rgba(0,0,0,0.75)',
      padding: '0 2rem'
    }}>
      <div style={{ justifySelf: 'flex-start', color: 'whitesmoke', fontWeight: '600', letterSpacing: '3px' }}>
        POKEDEX
      </div>
      <div style={{ justifySelf: 'flex-end' }}>
        <select style={{ width: '10rem'}}>
          <option value="spanish"> Español </option>
          <option value="English"> English </option>
        </select>
      </div>
    </div>
  )
}

export default HeaderComponent;