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

//******************************************
//***** SEARCH POKEMON EVOLUTION CHAIN
//******************************************

export interface IEvolvesTo {
  evolution_details: IEvolutionDetails[];
  evolves_to: IEvolvesTo[];
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
}

export interface IEvolutionDetails {
  gender: any;
  held_item: any;
  item: any;
  known_move: any;
  known_move_type: any;
  location: any;
  min_affection: any;
  min_beauty: any;
  min_happiness: any;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: any;
  party_type: any;
  relative_physical_stats: any;
  time_of_day: any;
  trade_species: any;
  trigger: {
    name: string;
    url: string;
  };
  turn_upside_down: boolean;
}

export interface IPokemonEvolutionChain {
  baby_trigger_item: any;
  chain: {
    evolution_details: IEvolutionDetails[];
    evolves_to: IEvolvesTo[];
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
  };
  id: number;
}

//******************************************
//***** SEARCH POKEMON ESPECIES SERVICE
//******************************************

export interface IEggGroup {
  name: string;
  url: string;
}

export interface IFlavorTextEntries {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

export interface IGenera {
  genus: string;
  language: {
    name: string;
    url: string;
  };
}

export interface INames {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

export interface IPalParkEncounters {
  area: {
    name: string;
    url: string;
  };
  base_score: number;
  rate: number;
}

export interface IPokedexNumbers {
  entry_number: number;
  pokedex: {
    name: string;
    url: string;
  };
}

export interface IVarieties {
  is_default: boolean;
  pokemon: {
    name: string;
    url: string;
  };
}

export interface IPokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: IEggGroup[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  };
  flavor_text_entries: IFlavorTextEntries[];
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: IGenera[];
  generation: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: INames[];
  order: number;
  pal_park_encounters: IPalParkEncounters[];
  pokedex_numbers: IPokedexNumbers[];
  shape: {
    name: string;
    url: string;
  };
  varieties: IVarieties[];
}
