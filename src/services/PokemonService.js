import { API_BASEPATH } from "../constants/constants";

export const getPokemon = async (url) => {
  try {
    let pokemon = await fetch(url).then((res) => res.json());
    const urlSpecie = API_BASEPATH + 'pokemon-species/' + pokemon.id ;
    let specie  = await fetch(urlSpecie).then((res) => res.json());
    return { ...pokemon, ...specie };
  } catch (err) {
    // Si tenemos un interceptor no debería llegar acá y se podría manejar el error por ahí.
    // Sino se podria propagar el error al componente y realizar algún manejo ahí mismo o manejarlo acá.
    console.log(err);
  }
}

export const getLanguages = async () => {
  try {
    const url = API_BASEPATH + 'language';
    return await fetch(url).then((res) => res.json());
  } catch (err) {
    // Si tenemos un interceptor no debería llegar acá y se podría manejar el error por ahí.
    // Sino se podria propagar el error al componente y realizar algún manejo ahí mismo o manejarlo acá.
    console.log(err);
  }
}

export const getPokemonPage = async (limit, offset) => {
  try {
    const url = API_BASEPATH + `pokemon?limit=${limit}&offset=${offset}`;
    return await fetch(url).then((res) => res.json());
  } catch (err) {
    // Si tenemos un interceptor no debería llegar acá y se podría manejar el error por ahí.
    // Sino se podria propagar el error al componente y realizar algún manejo ahí mismo o manejarlo acá.
    console.log(err);
  }
}

export const getStatDetail = async (url) => {
  try {
    return await fetch(url).then((res) => res.json());
  } catch (err) {
    // Si tenemos un interceptor no debería llegar acá y se podría manejar el error por ahí.
    // Sino se podria propagar el error al componente y realizar algún manejo ahí mismo o manejarlo acá.
    console.log(err);
  }
}
