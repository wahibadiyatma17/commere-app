import axios, { AxiosRequestConfig } from 'axios';
import pokemonEndpoint from './pokemonEndpoint';

export const getPokemons = (searchQuery?: string) => {
  if (searchQuery !== undefined) return axios.get(pokemonEndpoint.pokemon + `/${searchQuery}`);
  else return axios.get(pokemonEndpoint.pokemon);
};

export const getPokemonTypes = (searchQuery?: string) => {
  if (searchQuery !== undefined) return axios.get(pokemonEndpoint.pokemonType + `/${searchQuery}`);
  else return axios.get(pokemonEndpoint.pokemonType);
};

export const getPokemonSpecies = (searchQuery?: string) => {
  if (searchQuery !== undefined)
    return axios.get(pokemonEndpoint.pokemonSpecies + `/${searchQuery}`);
  else return axios.get(pokemonEndpoint.pokemonSpecies);
};

export const getPokemonEvolutionChain = (id?: number) => {
  return axios.get(pokemonEndpoint.pokemonEvolution + `/${id}`);
};
