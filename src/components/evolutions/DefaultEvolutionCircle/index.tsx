import React from "react";
import Image from "next/image";
import { Container, CardCircleBox } from "./styles";
import { FiChevronRight } from "react-icons/fi";
import { useTheme } from "styled-components";
import Link from "next/link";
//Components
import CardType from "../../CardType";
//Types
import { IPokemon } from "../../../services/pokemon.types";
//Utils
import { cardTypeColor } from "../../../utils/cardTypeColor";

interface IProps {
  pokemonsInformation: IPokemon[];
  pokemonActiveId: number;
}

const DefaultEvolutionCircle: React.FC<IProps> = ({
  pokemonsInformation,
  pokemonActiveId,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <h3>Evolutions</h3>
      <div className="card-circle-boxes">
        {pokemonsInformation.map((pokemonInformation, index) => {
          return (
            <React.Fragment key={pokemonInformation.id}>
              <CardCircleBox
                isActive={pokemonActiveId === pokemonInformation.id}
                backgroundColor={cardTypeColor(
                  pokemonInformation.types[0].type.name
                )}
              >
                <Link href={`/pokemon/${pokemonInformation.id}`}>
                  <div className="image-link-circle">
                    <div className="image-content-circle">
                      {!!pokemonInformation && (
                        <Image
                          src={`${
                            pokemonInformation?.sprites.other[
                              "official-artwork"
                            ].front_default || "/static/images/pokeball.png"
                          }`}
                          alt={`${pokemonInformation?.name}`}
                          layout="fill"
                          objectFit="contain"
                          quality={50}
                          priority
                        />
                      )}
                    </div>
                    <div className="image-content-circle-background" />
                  </div>
                </Link>
                <p className="card-pokemon-name">
                  {pokemonInformation?.name}&nbsp;
                  <span>#{("0000" + pokemonInformation?.id).slice(-4)}</span>
                </p>
                <div className="card-type">
                  {pokemonInformation?.types.map((type) => (
                    <CardType
                      key={type.slot}
                      type={type.type.name}
                      label={type.type.name}
                    />
                  ))}
                </div>
              </CardCircleBox>
              {index < pokemonsInformation.length - 1 && (
                <div className="chevron">
                  <FiChevronRight
                    size={"7rem"}
                    color={theme.pallete.colors.grey[400]}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </Container>
  );
};

export default DefaultEvolutionCircle;
