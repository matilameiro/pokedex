import React, { useEffect, useState } from 'react'

import PokemonCardComponent from '../PokemonCardComponent/PokemonCardComponent';
import ModalComponent from '../ModalComponent/ModalComponent';
import PokemonDetailsComponent from '../PokemonDetailsComponent/PokemonDetailsComponent';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

import { getPokemon } from '../../services/PokemonService';

import { CANT_PAGES, CANT_POKEMONS } from '../../constants/constants';

import './PokemonListComponent.scss';

const PokemonListComponent = () => {
  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [show, setShow] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promises = [];
    const start = (page * 5) + 1 > 0 ? (page * 5) + 1 : 1;
    const finish = start + 5 <= CANT_POKEMONS ? start + 5 : CANT_POKEMONS + 1 ;
    setLoading(true);

    for (let i = start; i < finish ; i++) {
      promises.push(getPokemon(i));
    }

    Promise.all(promises).then((result) => {
      const pokemons = result.map((data) => {
        return {
          id: data.id,
          name: data.name,
          image_default: data.sprites.front_default,
          image_dream_world: data.sprites.other.dream_world.front_default,
          types: data.types.map((type) => type.type.name),
          stats: data.stats
        }
      });
        setPokemonList(pokemons);
        setLoading(false);
    })
  }, [page])

  const closeModalHandler = () => setShow(false);

  const showPokemonDetail = (pokemon) => {
    setPokemonSelected(pokemon);
    setShow(true);
  }

  return (
    <div className="pokemon-list">
      {
        loading ? <LoadingComponent></LoadingComponent> :
        <>
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
            {
              page > 0 &&
              <button 
                onClick={() => setPage(page - 1)} 
                className='primary-button'>
                  {'< Atrás'}
              </button>
            }
            {
              page < CANT_PAGES &&
              <button 
                onClick={() => setPage(page + 1)} 
                className='primary-button'>
                  {'Siguiente >'}
              </button>
            }
          </div>
        </>
      }

      <ModalComponent title="Detalles del pokemon" show={show} close={closeModalHandler}>
        { show && pokemonSelected && 
          <PokemonDetailsComponent pokemon={pokemonSelected}></PokemonDetailsComponent>
        }
      </ModalComponent>
    </div>
  )
}

export default PokemonListComponent;