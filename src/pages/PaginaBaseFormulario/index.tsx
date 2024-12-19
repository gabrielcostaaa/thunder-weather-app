import styled from "styled-components";

const StyledContainer = styled.main`
  background-color: #1c1c22;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContent = styled.div`
  width: 85vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PaginaBaseFormulario({ children }: { children: React.ReactNode }) {
  return (
    <StyledContainer>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
}

export default PaginaBaseFormulario;
