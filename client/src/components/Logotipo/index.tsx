import styled from "styled-components";
import logo from "./Logo.png";

const StyledImg = styled.img`
  width: 220px;
  max-width: 220px;
  height: auto;
  margin-right: 25px;
`;

const Logotipo = () => {
  return <StyledImg src={logo} alt="Logo da Thunder" />;
};

export default Logotipo;
