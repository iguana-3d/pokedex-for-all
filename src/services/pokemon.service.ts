import axios from "axios";
import {
  IPokemon,
  IListPokemonPaginationService,
  IPokemonEvolutionChain,
  IPokemonSpecies,
} from "./pokemon.types";

export const SearchPokemonService = async (
  nameOrId: string | number
): Promise<IPokemon> => {
  const response = await axios.get<IPokemon>(
    `${process.env.NEXT_PUBLIC_URL_API_BASE}/pokemon/${
      typeof nameOrId === "string" ? nameOrId.toLowerCase() : nameOrId
    }`
  );

  return response.data;
};

export const ListPokemonPaginationService = async (
  limit: number = 20,
  offset: number = 0
): Promise<IListPokemonPaginationService> => {
  const response = await axios.get<IListPokemonPaginationService>(
    `${process.env.NEXT_PUBLIC_URL_API_BASE}/pokemon/?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

export const SearchPokemonSpeciesService = async (
  id: number
): Promise<IPokemonSpecies> => {
  const response = await axios.get<IPokemonSpecies>(
    `${process.env.NEXT_PUBLIC_URL_API_BASE}/pokemon-species/${id}/`
  );
  return response.data;
};

export const SearchpokemonEvolutionChainService = async (
  id: number
): Promise<IPokemonEvolutionChain> => {
  const response = await axios.get<IPokemonEvolutionChain>(
    `${process.env.NEXT_PUBLIC_URL_API_BASE}/evolution-chain/${id}/`
  );
  return response.data;
};
