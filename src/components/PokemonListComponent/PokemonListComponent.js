import React, { useEffect, useState } from 'react'
import PokemonCardComponent from '../PokemonCardComponent/PokemonCardComponent';

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
      console.log(pokemons)
      setPokemonList(pokemons);
    })
  }, [page])

  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:'2rem auto 2rem',
      gridGap: '1rem'
    }}>
      <div style={{ justifySelf: 'flex-start', alignSelf: 'center', fontSize: '2rem', border:'1px solid', borderRadius:'100%'}}>{'<'}</div>
      <div style={{justifySelf:'stretch', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%'}}>
        {
          pokemonList.map((pokemon) => (
            <PokemonCardComponent key={pokemon.id} title={pokemon.name} imgUrl={pokemon.image} body={pokemon.type}></PokemonCardComponent>
          ))
        }
      </div>
      <div style={{ justifySelf: 'flex-end', alignSelf: 'center', fontSize: '2rem'}}>{'>'}</div>
    </div>
  )
}

export default PokemonListComponent;