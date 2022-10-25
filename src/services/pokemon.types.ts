export interface IResultsListPokemon {
  name: string;
  url: string;
}

export interface IListPokemonPaginationService {
  count: number;
  next: string;
  results: IResultsListPokemon[];
}

export interface IPokemon {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  weight: number;
  abilities: IAbilities[];
  forms: IForms[];
  game_indices: IGameIndices[];
  held_items: IHeldItems[];
  moves: IMoves[];
  past_types: [];
  species: ISpecies;
  sprites: ISprites;
  stats: IStats[];
  types: ITypes[];
}

export interface IAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IForms {
  name: string;
  url: string;
}

export interface IGameIndices {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface IHeldItems {
  item: {
    name: string;
    url: string;
  };
  version_details: IVersionDetails[];
}

export interface IVersionDetails {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

export interface IMoves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: IVersionGroupDetails[];
}

export interface IVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface IPastTypes {}

export interface ISpecies {
  name: string;
  url: string;
}

export interface ISprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string | null;
    };
  };
  versions: {
    "generation-i": {
      "red-blue": {
        back_default: string | null;
        back_gray: string | null;
        back_transparent: string | null;
        front_default: string | null;
        front_transparent: string | null;
      };
      yellow: {
        back_default: string | null;
        back_gray: string | null;
        front_gray: string | null;
        front_transparent: string | null;
      };
    };
    "generation-ii": {
      crystal: {
        back_default: string | null;
        back_shiny: string | null;
        back_shiny_transparent: string | null;
        back_transparent: string | null;
        front_default: string | null;
        front_shiny: string | null;
        front_shiny_transparent: string | null;
        front_transparent: string | null;
      };
      gold: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
        front_transparent: string | null;
      };
      silver: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
        front_transparent: string | null;
      };
    };
    "generation-iii": {
      emerald: {
        front_default: string | null;
        front_shiny: string | null;
      };
      "firered-leafgreen": {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
      "ruby-sapphire": {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
    };
    "generation-iv": {
      "diamond-pearl": {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "heartgold-soulsilver": {
        back_default: "https://raw.gitmon/versions/generation-iv/heartgold-soulsilver/back/132.png";
        back_female: null;
        back_shiny: "https://raw.githubusercons/generation-iv/heartgold-soulsilver/back/shiny/132.png";
        back_shiny_female: null;
        front_default: "https://raw.githubuserions/generation-iv/heartgold-soulsilver/132.png";
        front_female: null;
        front_shiny: "https://raw.githubuse/generation-iv/heartgold-soulsilver/shiny/132.png";
        front_shiny_female: null;
      };
      platinum: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-v": {
      "black-white": {
        animated: {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        back_default: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-vi": {
      "omegaruby-alphasapphire": {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "x-y": {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-vii": {
      icons: {
        front_default: string | null;
        front_female: null;
      };
      "ultra-sun-ultra-moon": {
        front_default: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-viii": {
      icons: {
        front_default: string | null;
        front_female: string | null;
      };
    };
  };
}

export interface IStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface ITypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
