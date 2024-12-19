import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  width: 100%;
  margin-top: 35px;

  & > *:first-child {
    flex: 0 0 30%;
  }

  & > *:last-child {
    flex: 1;
  }
`;

export default FormContainer;
