import React, { useState, useEffect } from "react";
import { Container } from "../../../styles/pages/list";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTheme } from "styled-components";
//Services
import {
  SearchPokemonService,
  SearchPokemonSpeciesService,
  SearchPokemonEvolutionChainService,
} from "../../services/pokemon.service";
import { IPokemon } from "../../services/pokemon.types";
//Components
import CardType from "../../components/CardType";
import DefaultEvolutionCircle from "../../components/evolutions/DefaultEvolutionCircle";
import RadarChart from "../../components/charts/RadarChart";
//Utils
import {
  kilogramsToPounds,
  metersToFeet,
} from "../../utils/measurementUnitsConversion";
//Icons
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

const List: React.FC = () => {
  const [pokemonsInformation, setPokemonsInformation] = useState<IPokemon[]>(
    []
  );
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    router.isReady &&
      (async () => {
        const pokemonIds: number[] = [];
        const getEvolutionChainNumber = await SearchPokemonSpeciesService(
          parseInt(router.query.id as string)
        ).then((speciesResponse) => {
          return speciesResponse?.evolution_chain.url
            .split("/")
            .filter((specieFilter) => !!specieFilter)
            .slice(-1)[0];
        });
        const getEvolutionChain = await SearchPokemonEvolutionChainService(
          parseInt(getEvolutionChainNumber)
        );
        pokemonIds.push(
          parseInt(
            getEvolutionChain.chain.species.url
              .split("/")
              .filter((specieFilter) => !!specieFilter)
              .slice(-1)[0]
          )
        );
        for (const evolutionChain of getEvolutionChain.chain.evolves_to) {
          pokemonIds.push(
            parseInt(
              evolutionChain.species.url
                .split("/")
                .filter((specieFilter) => !!specieFilter)
                .slice(-1)[0]
            )
          );
          if (!!evolutionChain.evolves_to) {
            for (const evolvesTo of evolutionChain.evolves_to) {
              pokemonIds.push(
                parseInt(
                  evolvesTo.species.url
                    .split("/")
                    .filter((specieFilter) => !!specieFilter)
                    .slice(-1)[0]
                )
              );
            }
          }
        }
        const searchPokemon: IPokemon[] = [];
        for (const pokemonId of pokemonIds) {
          await SearchPokemonService(pokemonId).then(
            (searchPokemonResponse) => {
              searchPokemon.push(searchPokemonResponse);
            }
          );
        }
        setPokemonsInformation(searchPokemon);
        console.log(searchPokemon);
      })();
  }, [router.query.id, router.isReady]);

  return (
    <Container>
      <Link href="/">
        <div className="return-page">
          <FiChevronLeft size={"3rem"} color={theme.pallete.colors.grey[400]} />{" "}
          <span>voltar</span>
        </div>
      </Link>
      {pokemonsInformation.map((pokemonInformation) => {
        return (
          pokemonInformation.id === parseInt(router.query.id as string) && (
            <div key={pokemonInformation.id} className="basic-informations">
              <div className="image-content">
                {!!pokemonInformation && (
                  <Image
                    src={`${
                      pokemonInformation?.sprites.other["official-artwork"]
                        .front_default || "https://#"
                    }`}
                    alt={`${pokemonInformation?.name}`}
                    layout="fill"
                    objectFit="contain"
                    quality={50}
                    priority
                  />
                )}
              </div>
              <table className="table">
                <tbody>
                  <tr className="table-row">
                    <td className="table-title">National Nº</td>
                    <td className="table-content">
                      {("0000" + pokemonInformation?.id).slice(-4)}
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-title">Type</td>
                    <td className="table-content">
                      <div className="table-type">
                        {pokemonInformation?.types.map((type) => (
                          <CardType
                            key={type.slot}
                            type={type.type.name}
                            label={type.type.name}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-title">Species</td>
                    <td className="table-content">aaa</td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-title">Height</td>
                    <td className="table-content">
                      {metersToFeet(
                        parseFloat(
                          pokemonInformation?.height.toString().slice(0, -1) +
                            "." +
                            pokemonInformation?.height.toString().slice(-1)
                        ) || 0
                      ).toFixed(2)}
                      &quot;&nbsp; (
                      {pokemonInformation?.height.toString().slice(0, -1) +
                        "." +
                        pokemonInformation?.height.toString().slice(-1)}
                      &nbsp;m)
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-title">Weight</td>
                    <td className="table-content">
                      {kilogramsToPounds(
                        parseFloat(
                          pokemonInformation?.weight.toString().slice(0, -1) +
                            "." +
                            pokemonInformation?.weight.toString().slice(-1)
                        ) || 0
                      ).toFixed(2)}
                      &nbsp; lbs &nbsp; (
                      {pokemonInformation?.weight.toString().slice(0, -1) +
                        "." +
                        pokemonInformation?.weight.toString().slice(-1)}
                      &nbsp;kg)
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-title">Abilities</td>
                    <td className="table-content">aaaa</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        );
      })}
      <RadarChart
        pokemonInformation={
          pokemonsInformation.filter(
            (pokemonInformation) =>
              pokemonInformation.id === parseInt(router.query.id as string)
          )[0]
        }
      />
      <DefaultEvolutionCircle
        pokemonsInformation={pokemonsInformation}
        pokemonActiveId={parseInt(router.query.id as string)}
      />
    </Container>
  );
};

export default List;
