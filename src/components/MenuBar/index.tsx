import React from 'react';

import {
  Container,
  ContainerLogo,
  Logo,
  ContainerLinks,
  MenuButton,
  HomeIcon,
  AgendaIcon,
  ExerciseIcon,
  ClientIcon,
  PriceIcon,
  PerfilIcon,
  ExitIcon,
} from './styles';

import logoImg from '../../assets/logowhite.svg';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <ContainerLogo>
        <Logo src={logoImg} alt="Logo Gleyce Cristina" />
      </ContainerLogo>
      <ContainerLinks>
        <MenuButton to="/">
          <HomeIcon />
          <span>Dashboard</span>
        </MenuButton>
        <MenuButton to="/">
          <AgendaIcon />
          <span>Agenda de Aulas</span>
        </MenuButton>
        <MenuButton to="/exercises">
          <ExerciseIcon />
          <span>Exercícios</span>
        </MenuButton>
        <MenuButton to="/students">
          <ClientIcon />
          <span>Alunos</span>
        </MenuButton>
        <MenuButton to="/">
          <PriceIcon />
          <span>Preços</span>
        </MenuButton>
        <MenuButton to="/">
          <PerfilIcon />
          <span>Perfil</span>
        </MenuButton>
        <MenuButton to="/">
          <ExitIcon />
          <span>Sair</span>
        </MenuButton>
      </ContainerLinks>
    </Container>
  );
};

export default MenuBar;
