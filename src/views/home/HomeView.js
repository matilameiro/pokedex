import React, { useEffect, useState } from 'react'
import PokeListComponent from '../../components/PokeListComponent/PokeListComponent'

const HomeView = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/??offset=0&limit=5')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // setPokemons(data)
        // setLoading(false)
        // setError(false)
      })
      .catch(err => {
        // setLoading(false)
        // setError(true)
      })
  }, [])

  return (
    <div style={{padding: '1rem 2rem'}}>
      <PokeListComponent></PokeListComponent>
    </div>
  )
};

export default HomeView;
