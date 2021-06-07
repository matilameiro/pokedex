import { API_BASEPATH } from "../constants/constants";

export const getPokemon = async (id) => {
  try {
    const url = API_BASEPATH + 'pokemon/' + id;
    return await fetch(url).then((res) => res.json());
  } catch (err) {
    // Si tenemos un interceptor no debería llegar acá y se podría manejar el error por ahí.
    // Sino se podria propagar el error al componente y realizar algún manejo ahí mismo o manejarlo acá.
    console.log(err);
  }
}
