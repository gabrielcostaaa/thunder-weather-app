import styled from "styled-components";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $error?: boolean;
}

const Input = styled.input<InputProps>`
  background: var(--azul-secondary);
  box-sizing: border-box;
  color: var(--white);
  margin: 0.5em 0;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: ${(props) => (props.$error ? " 1px solid #a71e1e" : "none")};
  width: 100%;
  padding: 16px;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  &::placeholder {
    color: var(--cinza-placeholder);
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  &:focus {
    outline-color: ${(props) => (props.$error ? "#a71e1e" : "")};
  }
`;

export default Input;
