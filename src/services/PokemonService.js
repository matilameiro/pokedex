import { API_BASEPATH } from "../constants/constants";

export const getPokemon = async (id) => {
  try {
    const url = API_BASEPATH + 'pokemon/' + id;
    return await fetch(url).then((res) => res.json());
  } catch (err) {
    return Promise.reject(err);
  }
}
