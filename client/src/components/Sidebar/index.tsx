import styled from "styled-components";
import { CloudSun, Building2 } from 'lucide-react';

const SidebarContainer = styled.aside`
  width: 120px;
  height: 710px;
  background-color: #2B2D42;
  color: (--white);
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 30px;
  top: 0;
  left: 0;
`;

const SidebarMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.a`
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justiify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #EDF2F4;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin: 0.3rem 0;
  transition: background-color 0.3s ease;

  &:hover {
    color: var(--amarelo-primary);
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <MenuItem href="#">
        <CloudSun />
        Clima</MenuItem>
        <MenuItem href="#">
        <Building2 />
        Cidades</MenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};
export default Sidebar;