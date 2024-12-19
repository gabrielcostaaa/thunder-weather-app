import styled from "styled-components";
import ButtonFavorite from "../ButtonFavorite";
import ButtonCompare from "../ButtonCompare";
import { Heart, Zap } from 'lucide-react';
import { useState } from "react";

const NavbarContainer = styled.div`
    width: 330px;
    height: 95px;
    background-color: #2B2D42;
    color: var(--white);  // Verifique se você tem a variável CSS definida para --white
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    border-radius: 30px;
    top: 0;
    left: 0;
`;

const Navbar = () => {
  const [save, setSave] = useState<boolean>(false);

  return (
    <NavbarContainer>
      <ButtonFavorite
      onClick={() => setSave(!save)}
      >
        <Heart 
        size={25}
        color="#E63946"
        fill={save ? '#E63946' : 'none'}
        strokeWidth={2.5}
      />
        Favoritar
      </ButtonFavorite>
      <ButtonCompare>
        <Zap 
        size={25}
        color="var(--amarelo-primary)"
        fill="var(--amarelo-primary)"
        strokeWidth={2.5}
      />
        Comparar
      </ButtonCompare>
    </NavbarContainer>
  );
}

export default Navbar;
