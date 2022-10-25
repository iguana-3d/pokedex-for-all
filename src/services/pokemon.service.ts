import axios from "axios";
import { IPokemon, IListPokemonPaginationService } from "./pokemon.types";

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
