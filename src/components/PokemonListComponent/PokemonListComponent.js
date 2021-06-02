import React, { useEffect, useState } from 'react'

const PokemonListComponent = () => {
  const [page, setPage] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const promises = [];

    for (let i = page; i <= page * 5; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((result) => {
      const pokemons = result.map((data) => ({
        id: data.id,
        name: data.name,
        image: data.sprites['front_default'],
        type: data.types.map((type) => type.type.name)
      }));
      setPokemonList(pokemons);
    })
  }, [page])

  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:'1rem auto 1rem',
      gridGap: '1rem',
      height: '80vh'
    }}>
      <div style={{justifySelf:'flex-start'}}>{'<'}</div>
      <div style={{justifySelf:'stretch', display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        {
          pokemonList.map((pokemon) => (
            <div key={pokemon.id}>
              <h5>{pokemon.name}</h5>
              <h5>{pokemon.type}</h5>
            </div>
          ))
        }
      </div>
      <div style={{justifySelf:'flex-end'}}>{'>'}</div>
    </div>
  )
}

export default PokemonListComponent;