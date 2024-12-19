import styled from "styled-components";

const Button = styled.button`
  background-color: var(--amarelo-primary);
  border-radius: 30px;
  padding: 14px 26px; /* Aumente o preenchimento interno */
  color: var(--dark);
  border: none;
  margin-top: 1.5em;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  cursor: pointer;
  width: auto;
  height: auto;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #FFC53A;
  }
`;

export default Button;
