import React, { useEffect, useState, useRef, Suspense } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Container, Card } from "../../styles/pages";
import { cardTypeColor } from "../utils/cardTypeColor";
import { useTheme } from "styled-components";
//Components
import CardType from "../components/CardType";
import ButtonDefault from "../components/buttons/ButtonDefault";
import TextField from "../components/inputs/TextField";
import CardPokemonSkeleton from "../components/skeletons/CardPokemon";
//Services
import {
  ListPokemonPaginationService,
  SearchPokemonService,
} from "../services/pokemon.service";
//Types
import {
  IListPokemonPaginationService,
  IPokemon,
  IResultsListPokemon,
} from "../services/pokemon.types";
//Icons
import { FiSearch } from "react-icons/fi";

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isLoadingPokemon, setIsLoadingPokemon] = useState<boolean>(false);
  const [resultListNamesPokemon, setResultListNamesPokemon] = useState<
    IResultsListPokemon[]
  >([]);
  const router = useRouter();
  const theme = useTheme();
  const pokemonSearchRef = useRef<HTMLInputElement>(null);
  const [pokemonName, setPokemonName] = useState<IPokemon>();

  const handleLoadMorePokemon = async () => {
    setIsLoadingPokemon((prev) => !prev);
    const pokemonsResponse: IPokemon[] = [];
    for (const resultListNamePokemon of resultListNamesPokemon.slice(
      pokemons.length,
      pokemons.length + 8
    )) {
      await SearchPokemonService(resultListNamePokemon.name).then((pokemon) => {
        pokemonsResponse.push(pokemon);
      });
    }
    setPokemons(pokemons.concat(pokemonsResponse));
    setIsLoadingPokemon((prev) => !prev);
  };

  const handleSearchPokemonSubmit = async () => {
    const searchPokemonService = await SearchPokemonService(
      pokemonSearchRef.current?.value || ""
    ).catch((response) => {
      console.log("error", response);
    });
    console.log(searchPokemonService);
  };

  const generatePokemonSkeleton = () => {
    const skeletons: React.ReactNode[] = [];
    for (let i = 0; i < 8; i++) {
      skeletons.push(<CardPokemonSkeleton key={i} />);
    }
    return skeletons;
  };

  useEffect(() => {
    router.isReady &&
      (async () => {
        const listPokemons = await ListPokemonPaginationService(1500, 0);
        const resultListPokemonsFirst = listPokemons.results.slice(0, 905);
        const resultListPokemonsSecond = listPokemons.results.slice(905);
        for (const listPokemon of resultListPokemonsSecond) {
          const namePokemonSplit = listPokemon.name.split("-");
          namePokemonSplit.some((name) => name.includes("mega")) &&
            resultListPokemonsFirst.push(listPokemon);
        }

        setResultListNamesPokemon(resultListPokemonsFirst);
        const pokemonsResponse: IPokemon[] = [];
        for (const resultListPokemonFirst of resultListPokemonsFirst.slice(
          0,
          8
        )) {
          await SearchPokemonService(resultListPokemonFirst.name).then(
            (pokemon) => {
              pokemonsResponse.push(pokemon);
            }
          );
        }
        setPokemons(pokemonsResponse);
      })();
  }, [router.isReady]);

  return (
    <Container>
      <TextField
        label="abc"
        type="text"
        iconRight={<FiSearch />}
        color="primary"
        ref={pokemonSearchRef}
      />
      <ButtonDefault
        buttonText="search"
        //  onClick={handleSearchPokemonSubmit}
        onClick={() => {
          alert("On Development");
        }}
      />
      <div className="cards-grid">
        {pokemons.length
          ? pokemons.map((pokemon) => {
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
                          priority
                          placeholder="blur"
                          blurDataURL="/static/images/favicon.ico"
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
            })
          : generatePokemonSkeleton()}
      </div>
      <div className="cards-loading-more">
        <ButtonDefault
          buttonText="load more"
          isLoading={isLoadingPokemon}
          onClick={handleLoadMorePokemon}
        />
      </div>
    </Container>
  );
};

export default Home;
