import React, { useEffect, useState, useMemo } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Card, CardType } from "../../styles/pages";
import { useTheme } from "styled-components";
//Services
import {
  ListPokemonPaginationService,
  SearchPokemonService,
} from "../services/pokemon.service";
//Types
import { IPokemon, ITypes } from "../services/pokemon.types";

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const router = useRouter();
  const theme = useTheme();

  const colors = (type: string) => {
    switch (type) {
      case "normal":
        return {
          gradient: theme.pallete.gradients.normal,
          primary: theme.pallete.colors.others.types.normal,
        };
      case "fighting":
        return {
          gradient: theme.pallete.gradients.fighting,
          primary: theme.pallete.colors.others.types.fighting,
        };
      case "flying":
        return {
          gradient: theme.pallete.gradients.flying,
          primary: theme.pallete.colors.others.types.flying,
        };
      case "poison":
        return {
          gradient: theme.pallete.gradients.poison,
          primary: theme.pallete.colors.others.types.poison,
        };
      case "ground":
        return {
          gradient: theme.pallete.gradients.ground,
          primary: theme.pallete.colors.others.types.ground,
        };
      case "rock":
        return {
          gradient: theme.pallete.gradients.rock,
          primary: theme.pallete.colors.others.types.rock,
        };
      case "bug":
        return {
          gradient: theme.pallete.gradients.bug,
          primary: theme.pallete.colors.others.types.bug,
        };
      case "ghost":
        return {
          gradient: theme.pallete.gradients.ghost,
          primary: theme.pallete.colors.others.types.ghost,
        };
      case "steel":
        return {
          gradient: theme.pallete.gradients.steel,
          primary: theme.pallete.colors.others.types.steel,
        };
      case "fire":
        return {
          gradient: theme.pallete.gradients.fire,
          primary: theme.pallete.colors.others.types.fire,
        };
      case "water":
        return {
          gradient: theme.pallete.gradients.water,
          primary: theme.pallete.colors.others.types.water,
        };
      case "grass":
        return {
          gradient: theme.pallete.gradients.grass,
          primary: theme.pallete.colors.others.types.grass,
        };
      case "electric":
        return {
          gradient: theme.pallete.gradients.electric,
          primary: theme.pallete.colors.others.types.electric,
        };
      case "psychic":
        return {
          gradient: theme.pallete.gradients.psychic,
          primary: theme.pallete.colors.others.types.psychic,
        };
      case "ice":
        return {
          gradient: theme.pallete.gradients.ice,
          primary: theme.pallete.colors.others.types.ice,
        };
      case "dragon":
        return {
          gradient: theme.pallete.gradients.dragon,
          primary: theme.pallete.colors.others.types.dragon,
        };
      case "dark":
        return {
          gradient: theme.pallete.gradients.dark,
          primary: theme.pallete.colors.others.types.dark,
        };
      case "fairy":
        return {
          gradient: theme.pallete.gradients.fairy,
          primary: theme.pallete.colors.others.types.fairy,
        };
      default:
        return {
          gradient: theme.pallete.colors.common.white,
          primary: theme.pallete.colors.common.white,
        };
    }
  };

  useEffect(() => {
    (async () => {
      const listPokemons = await ListPokemonPaginationService(10, 0);
      const pokemonsResponse: IPokemon[] = [];
      for (const listPokemon of listPokemons.results) {
        await SearchPokemonService(listPokemon.name).then((pokemon) => {
          console.log(pokemon);
          pokemonsResponse.push(pokemon);
        });
      }
      setPokemons(pokemonsResponse);
    })();
  }, [router.isReady]);

  return (
    <Container>
      <div className="content">
        {pokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              backgroundColor={colors(pokemon.types[0].type.name)}
            >
              <div className="card-box">
                <div className="card-image-content">
                  <Image
                    src={`${pokemon.sprites.other["official-artwork"].front_default}`}
                    alt={`${pokemon.name}`}
                    layout="fill"
                    objectFit="contain"
                    quality={50}
                    // priority
                  />
                </div>
                <span className="card-number">
                  #{("0000" + pokemon.id).slice(-4)}
                </span>
                <p className="card-pokemon-name">Bulbasaur</p>
                <div className="card-types-box">
                  {pokemon.types.map((type) => (
                    <CardType
                      key={type.slot}
                      backgroundColor={colors(type.type.name)}
                    >
                      {type.type.name}
                    </CardType>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Home;
