import React, { useEffect, useState, useMemo } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Card } from "../../styles/pages";
import { useTheme } from "styled-components";
import { cardTypeColor } from "../utils/cardTypeColor";
//Components
import CardType from "../components/CardType";
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

  const handleLoadMorePokemon = async () => {
    const listPokemons = await ListPokemonPaginationService(4, pokemons.length);
    const pokemonsResponse: IPokemon[] = [];
    for (const listPokemon of listPokemons.results) {
      await SearchPokemonService(listPokemon.name).then((pokemon) => {
        console.log(pokemon);
        pokemonsResponse.push(pokemon);
      });
    }
    setPokemons(pokemons.concat(pokemonsResponse));
  };

  useEffect(() => {
    router.isReady &&
      (async () => {
        const listPokemons = await ListPokemonPaginationService(4, 0);
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
              backgroundColor={cardTypeColor(pokemon.types[0].type.name)}
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
                <p className="card-pokemon-name">{pokemon.name}</p>
                <div className="card-types-box">
                  {pokemon.types.map((type) => (
                    <CardType
                      key={type.slot}
                      type={type.type.name}
                      label={type.type.name}
                    />
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="cards-loading-more">
        <button onClick={handleLoadMorePokemon}>Load More</button>
      </div>
    </Container>
  );
};

export default Home;
