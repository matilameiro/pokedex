import React, { useEffect, useState } from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import PokemonListComponent from '../../components/PokemonListComponent/PokemonListComponent';
import { getLanguages } from '../../services/PokemonService';

import './HomeView.scss'

const HomeView = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [languageSelected, setLanguageSelected] = useState('es');

  useEffect(() => {
    setLoading(true);
    getLanguages().then(({ results }) => {
      if (results) {
        setLanguages(results);
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      {
        loading ? 
          <LoadingComponent></LoadingComponent>
        :
        <>
          <HeaderComponent 
            languages = { languages } 
            initialLanguage = { languageSelected } 
            change = { setLanguageSelected }>
          </HeaderComponent>
          <PokemonListComponent language={ languageSelected } ></PokemonListComponent>
        </>
      }
    </>
  )
};

export default HomeView;
