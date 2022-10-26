import React, { useState, useEffect } from "react";
import { Container } from "../../../styles/pages/list";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTheme } from "styled-components";
import { getLuminance } from 'polished';
//Services
import { SearchPokemonService } from "../../services/pokemon.service";
import { IPokemon } from "../../services/pokemon.types";
//Components
import CardType from "../../components/CardType";
//Utils
import { kilogramsToPounds, metersToFeet } from "../../utils/measurementUnitsConversion";

const List: React.FC = () => {
  const [pokemonData, setPokemonInformation] = useState<IPokemon>();
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    router.isReady &&
      (async () => {
        const pokemonInformations = await SearchPokemonService(
          router.query.id as string | number
        );
        setPokemonInformation(pokemonInformations);
      })();
  }, [router.query.id, router.isReady]);

  console.log(getLuminance(theme.pallete.colors.others.types.dragon), getLuminance(theme.pallete.colors.others.types.electric));

  return (
    <Container>
      <div className="basic-informations">
        <div className="image-content">
          {!!pokemonData && (
            <Image
              src={`${
                pokemonData?.sprites.other["official-artwork"].front_default ||
                "https://#"
              }`}
              alt={`${pokemonData?.name}`}
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
                {("0000" + pokemonData?.id).slice(-4)}
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-title">Type</td>
              <td className="table-content">
                <div className="table-type">
                  {pokemonData?.types.map((type) => (
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
                    pokemonData?.height.toString().slice(0, -1) +
                      "." +
                      pokemonData?.height.toString().slice(-1)
                  ) || 0
                ).toFixed(2)}
                &quot;&nbsp; (
                {pokemonData?.height.toString().slice(0, -1) +
                  "." +
                  pokemonData?.height.toString().slice(-1)}
                &nbsp;m)
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-title">Weight</td>
              <td className="table-content">
                {kilogramsToPounds(
                  parseFloat(
                    pokemonData?.weight.toString().slice(0, -1) +
                      "." +
                      pokemonData?.weight.toString().slice(-1)
                  ) || 0
                ).toFixed(2)}
                &nbsp; lbs &nbsp; (
                {pokemonData?.weight.toString().slice(0, -1) +
                  "." +
                  pokemonData?.weight.toString().slice(-1)}
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
    </Container>
  );
};

export default List;
