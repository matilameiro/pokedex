import React, { useEffect, useState } from 'react'

import PokemonCardComponent from '../PokemonCardComponent/PokemonCardComponent';
import ModalComponent from '../ModalComponent/ModalComponent';
import PokemonDetailsComponent from '../PokemonDetailsComponent/PokemonDetailsComponent';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

import { getPokemon, getPokemonPage } from '../../services/PokemonService';

import { CANT_PAGES, PAGINATION } from '../../constants/constants';

import './PokemonListComponent.scss';

const PokemonListComponent = ( { language }) => {
  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [show, setShow] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const promises = [];
    setLoading(true);

    getPokemonPage(PAGINATION, page).then(({results: pokemons}) => {
      if (pokemons) {
        pokemons.forEach( ({ url }) => {          
          promises.push(getPokemon(url));
        });

         Promise.all(promises).then((result) => {
          const pokemons = result.map((data) => {
            const nameFounded = data.names.find(element => element.language.name === language)
            const name = nameFounded ? nameFounded.name : data.name;

            return {
              id: data.id,
              name: name,
              image_default: data.sprites.front_default,
              image_dream_world: data.sprites.other.dream_world.front_default,
              types: data.types.map((type) => type.type.name),
              stats: data.stats
            }
          });
          if (isMounted) {
            setPokemonList(pokemons);
            setLoading(false);
          }
        });
      }
    });

    return () => { isMounted = false };
  }, [page, language])

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
          <PokemonDetailsComponent pokemon={pokemonSelected} language={language}></PokemonDetailsComponent>
        }
      </ModalComponent>
    </div>
  )
}

export default PokemonListComponent;