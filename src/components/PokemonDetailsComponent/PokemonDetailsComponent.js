import React, { useEffect, useState } from 'react';
import './PokemonDetailsComponent.scss';
import { getStatDetail } from "../../services/PokemonService";
import LoadingComponent from '../LoadingComponent/LoadingComponent';

const PokemonDetailsComponent = ({pokemon, language}) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const promises = [];
    let defaultStat = {};

    pokemon.stats.forEach(({ base_stat, stat }) => {
      defaultStat[stat.name] = {
        name: stat.name,
        langugeName: stat.name,
        value: base_stat
      };
      promises.push(getStatDetail(stat.url));
    });
      
    Promise.all(promises).then((result) => {
      const stats = result.map((data) => {
        const nameFounded = data.names.find(element => element.language.name === language)
        const name = nameFounded ? nameFounded.name : data.name;
        
        defaultStat[data.name] = {...defaultStat[data.name], name: name};
        return defaultStat[data.name];
      });
      setStats(stats);
      setLoading(false);
    });

  }, [pokemon, language])

  const deleteMiddleDash = (name) => {
    return name.replace('-', ' ')
  }

  return (
    <>
      {
        loading ?
          <LoadingComponent></LoadingComponent>
        :
          <div className="pokemon-details">
            <div className="pokemon-details__header"></div>
            <div className="image">
              <img 
                src={pokemon.image_dream_world ? pokemon.image_dream_world : pokemon.image_default} 
                alt={"alt-" + pokemon.name}>
              </img>
            </div>
            <div className="pokemon-details__content">
              <div>
                <h1 className="pokemon-details__content__title">{pokemon.name}</h1>
              </div>
              <div className="pokemon-details__content__stats">
                {
                  stats.map((stat) => (
                    <div key={stat.name} className="pokemon-details__content__stats__stat">
                      <span className="pokemon-details__content__stats__stat__value">{stat.value}</span>
                      <span className="pokemon-details__content__stats__stat__name"><strong>{deleteMiddleDash(stat.name)}</strong> </span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default PokemonDetailsComponent;