import React from 'react';

import {
  Container,
  MenuButton,
  HomeIcon,
  AgendaIcon,
  ExerciseIcon,
  ClientIcon,
  PriceIcon,
  PerfilIcon,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
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
      <MenuButton to="/">
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
    </Container>
  );
};

export default MenuBar;
