import React, { useEffect, useState } from 'react'
import PokemonCardComponent from '../PokemonCardComponent/PokemonCardComponent';
import ModalComponent from '../ModalComponent/ModalComponent';

import './PokemonListComponent.scss';
import PokemonDetailsComponent from '../PokemonDetailsComponent/PokemonDetailsComponent';
import { getPokemon } from '../../services/PokemonService';

const PokemonListComponent = () => {
  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [show, setShow] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState(null)

  useEffect(() => {
    const promises = [];

    for (let i = (page * 5) + 1; i <= (page * 5) + 5 ; i++) {
      promises.push(getPokemon(i));
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

  const showPokemonDetail = (pokemon) => {
    setPokemonSelected(pokemon);
    setShow(true);
  }

  return (
    <div className="pokemon-list">
      <div className="pokemon-list__items">
        {
          pokemonList.map((pokemon) => (
            <PokemonCardComponent 
              key={pokemon.id} 
              pokemon={pokemon}
              showDetail={showPokemonDetail}>
            </PokemonCardComponent>
          ))
        }
      </div>
      <div className= "pokemon-list__actions">
        <button onClick={() => page > 0 ? setPage(page - 1) : null} className='primary-button'>Atrás</button>
        <button onClick={() => page < 225 ? setPage(page + 1) : null} className='primary-button'>Siguiente</button>
      </div>

      <ModalComponent title="Detalles del pokemon" show={show} close={closeModalHandler}>
        { show && pokemonSelected && 
          <PokemonDetailsComponent images={pokemonSelected.image} name={pokemonSelected.name} type={pokemonSelected.type}></PokemonDetailsComponent>
        }
      </ModalComponent>
    </div>
  )
}

export default PokemonListComponent;