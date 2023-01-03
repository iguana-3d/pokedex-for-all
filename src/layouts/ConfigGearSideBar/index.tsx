import React, { useContext, Dispatch, SetStateAction } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import Image from "next/image";
import { Container } from "./styles";
//Icons
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";

interface IConfigOpen {
  isHideOverflowOnModal: boolean;
  setIsHideOverflowOnModal: Dispatch<SetStateAction<boolean>>;
}

const ConfigGearSideBar: React.FC<IConfigOpen> = ({
  isHideOverflowOnModal,
  setIsHideOverflowOnModal,
}) => {
  const { toggleTheme } = useContext(ThemeContext);

  const handleConfigOpen = () => {
    setIsHideOverflowOnModal((prev) => !prev);
  };

  return (
    <Container isConfigGearOpen={isHideOverflowOnModal}>
      <div className="sidebar-content">
        <div className="close-box" onClick={handleConfigOpen}>
          <AiOutlineClose size="3rem" />
        </div>
        <p>Color Scheme</p>
        <div className="color-scheme-boxes">
          <div className="color-scheme-box">
            <div
              className="color-scheme-container-image"
              onClick={() => toggleTheme("light")}
            >
              <div className="color-scheme-content-image">
                <Image
                  src="/static/images/light-website.PNG"
                  alt="theme-light"
                  layout="fill"
                  objectFit="contain"
                  quality={50}
                  priority
                  placeholder="blur"
                  blurDataURL="/static/images/light-website.PNG"
                />
              </div>
            </div>
            <p>Light</p>
          </div>
          <div className="color-scheme-box">
            <div
              className="color-scheme-container-image"
              onClick={() => toggleTheme("dark")}
            >
              <div className="color-scheme-content-image">
                <Image
                  src="/static/images/dark-website.PNG"
                  alt="theme-dark"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  priority
                  placeholder="blur"
                  blurDataURL="/static/images/dark-website.PNG"
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
              src="/static/images/brazil.png"
              alt="brazilian-flag"
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
              src="/static/images/usa.png"
              alt="united-states-flag"
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
          <AiFillLinkedin size={"3rem"} />
          <AiFillGithub size={"3rem"} />
        </div>
      </div>
      <div className="sidebar-background" onClick={handleConfigOpen} />
    </Container>
  );
};

export default ConfigGearSideBar;
