import React from "react";
import { Navigation } from "./styles";
import Pokeball from "../../components/icons/Pokeball";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <Navigation>
      <Link href='/'>
        <div className="center-icon">
          <Pokeball size={50} />
        </div>
      </Link>
    </Navigation>
  );
};

export default NavBar;
