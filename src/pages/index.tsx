import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Container, Card } from "../../styles/pages";
import { cardTypeColor } from "../utils/cardTypeColor";
//Components
import CardType from "../components/CardType";
import ButtonDefault from '../components/buttons/ButtonDefault';
//Services
import {
  ListPokemonPaginationService,
  SearchPokemonService,
} from "../services/pokemon.service";
//Types
import { IPokemon } from "../services/pokemon.types";

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isLoadingPokemon, setisLoadingPokemon] = useState<boolean>(false);
  const router = useRouter();

  const handleLoadMorePokemon = async () => {
    setisLoadingPokemon(prev => !prev);
    const listPokemons = await ListPokemonPaginationService(8, pokemons.length);
    const pokemonsResponse: IPokemon[] = [];
    for (const listPokemon of listPokemons.results) {
      await SearchPokemonService(listPokemon.name).then((pokemon) => {
        pokemonsResponse.push(pokemon);
      });
    }
    setPokemons(pokemons.concat(pokemonsResponse));
    setisLoadingPokemon(prev => !prev);
  };

  useEffect(() => {
    router.isReady &&
      (async () => {
        const listPokemons = await ListPokemonPaginationService(8, 0);
        const pokemonsResponse: IPokemon[] = [];
        for (const listPokemon of listPokemons.results) {
          await SearchPokemonService(listPokemon.name).then((pokemon) => {
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
              <Link href={`/pokemon/${pokemon.id}`}>
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
              </Link>
            </Card>
          );
        })}
      </div>
      <div className="cards-loading-more">
        <ButtonDefault buttonText="load more" isLoading={isLoadingPokemon} onClick={handleLoadMorePokemon} />
      </div>
    </Container>
  );
};

export default Home;
