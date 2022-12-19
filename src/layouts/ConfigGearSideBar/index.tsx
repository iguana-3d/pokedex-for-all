import React from "react";
import Image from "next/image";
import { Container } from "./styles";
//Icons
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { theme } from "../../../styles/theme";

const ConfigGearSideBar: React.FC = () => {
  return (
    <Container>
      <div className="sidebar-content">
        <div className="close-box">
          <AiOutlineClose size="3rem" />
        </div>
        <p>Color Scheme</p>
        <div className="color-scheme-boxes">
          <div className="color-scheme-box">
            <div className="color-scheme-container-image">
              <div className="color-scheme-content-image">
                <Image
                  src="/static/images/light.png"
                  alt="theme-light"
                  layout="fill"
                  objectFit="contain"
                  quality={50}
                  priority
                  placeholder="blur"
                  blurDataURL="/static/images/favicon.ico"
                />
              </div>
            </div>
            <p>Light</p>
          </div>
          <div className="color-scheme-box">
            <div className="color-scheme-container-image">
              <div className="color-scheme-content-image">
                <Image
                  src="/static/images/light.png"
                  alt="theme-dark"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  priority
                  placeholder="blur"
                  blurDataURL="/static/images/brazil.png"
                />
              </div>
            </div>
            <p>Dark</p>
          </div>
        </div>
        <p>Languages</p>
        <div className="languages-flags">
          <div className="language-flag">
            <Image
              src={"/static/images/brazil.png"}
              alt={"brazilian-flag"}
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
              placeholder="blur"
              blurDataURL="/static/images/brazil.png"
            />
          </div>
          <div className="language-flag">
            <Image
              src={"/static/images/usa.png"}
              alt={"united-states-flag"}
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
              placeholder="blur"
              blurDataURL="/static/images/usa.png"
            />
          </div>
        </div>
        <div className="social-medias">
          <AiFillLinkedin size={"3rem"} color={theme.pallete.colors.grey[500]} />
          <AiFillGithub size={"3rem"}  color={theme.pallete.colors.grey[500]} />
        </div>
      </div>
      <div className="sidebar-background" />
    </Container>
  );
};

export default ConfigGearSideBar;
