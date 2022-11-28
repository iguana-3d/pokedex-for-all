import React from "react";
import Image from "next/image";
import { Container } from "./styles";
//Components
import CardType from "../../../components/CardType";
import Spinner from "../../loadings/Spinner";
//Types
import {
  IPokemonEvolutionChain,
  IPokemon,
} from "../../../services/pokemon.types";

interface IProps {
  pokemonEvolutionChain: IPokemonEvolutionChain;
  pokemonData?: IPokemon;
}

const DefaultEvolution: React.FC<IProps> = ({
  pokemonEvolutionChain,
  pokemonData,
}) => {
  console.log("pokemonEvolutionChain", pokemonEvolutionChain);
  return (
    <Container isActive={false}>
      <h3>Evolutions</h3>
      <div className="card-circle-boxes">
        <div className="card-circle-box">
          <div className="image-content-circle">
            {!!pokemonData && (
              <Image
                src={`${
                  pokemonData?.sprites.other["official-artwork"]
                    .front_default || "/static/images/pokeball.png"
                }`}
                alt={`${pokemonData?.name}`}
                layout="fill"
                objectFit="contain"
                quality={50}
                priority
              />
            )}
          </div>
          <p className="card-pokemon-name">
            {pokemonData?.name}&nbsp;
            <span>#{("0000" + pokemonData?.id).slice(-4)}</span>
          </p>

          <div className="card-type">
            {pokemonData?.types.map((type) => (
              <CardType
                key={type.slot}
                type={type.type.name}
                label={type.type.name}
              />
            ))}
          </div>
        </div>
        <div>arrow right and in responsive, arrow bottom</div>
      </div>
    </Container>
  );
};

export default DefaultEvolution;
