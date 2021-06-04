import React, { useEffect, useState } from 'react'
import PokemonCardComponent from '../PokemonCardComponent/PokemonCardComponent';
import ModalComponent from '../ModalComponent/ModalComponent';

import './PokemonListComponent.scss';

const PokemonListComponent = () => {
  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const promises = [];

    for (let i = (page * 5) + 1; i <= (page * 5) + 5 ; i++) {
      console.log(i);
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

  const closeModalHandler = () => setShow(false);

  return (
    <div className="pokemon-list">
      {/* <div style={{ justifySelf: 'flex-start', alignSelf: 'center', fontSize: '2rem', border:'1px solid', borderRadius:'100%'}}>{'<'}</div> */}
      <div className="pokemon-list__items">
        {
          pokemonList.map((pokemon) => (
            <PokemonCardComponent 
              key={pokemon.id} 
              title={pokemon.name} 
              imgUrl={pokemon.image} 
              body={pokemon.type}
              click={() => setShow(true)}>
            </PokemonCardComponent>
          ))
        }
      </div>
      {/* <div style={{ justifySelf: 'flex-end', alignSelf: 'center', fontSize: '2rem'}}>{'>'}</div> */}

      <div className= "pokemon-list__actions">
        <button onClick={() => page > 0 ? setPage(page - 1) : null} className='primary-button'>Atrás</button>
        <button onClick={() => page < 225 ? setPage(page + 1) : null} className='primary-button'>Siguiente</button>
      </div>

      <ModalComponent title='My modal' show={show} close={closeModalHandler}>
        <p>This is modal body</p>
      </ModalComponent>
    </div>
  )
}

export default PokemonListComponent;