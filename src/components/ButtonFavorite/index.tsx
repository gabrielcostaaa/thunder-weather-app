import styled from "styled-components";

const ButtonFavorite = styled.button`
  background-color: var(--white);
  border-radius: 30px;
  padding: 7px 13px; /* Aumente o preenchimento interno */
  color: #E63946;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  width: auto;
  height: auto;
  transition: background-color 0.2s ease, transform 0.2s ease;
`;

export default ButtonFavorite;
