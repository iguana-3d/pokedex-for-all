import React from "react";
import { Navigation } from "./styles";
import Pokeball from "../../components/icons/Pokeball";

const NavBar: React.FC = () => {
  return (
    <Navigation>
      <div className="center-icon">
        <Pokeball size={50} />
      </div>
    </Navigation>
  );
};

export default NavBar;
