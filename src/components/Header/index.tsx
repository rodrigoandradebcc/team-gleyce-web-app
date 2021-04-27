import React from 'react';

import { Container, HeaderNav, HeaderNavContent } from './styles';
import logoImg from '../../assets/logoblack.png';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderNav>
        <HeaderNavContent>
          <img src={logoImg} alt="TeamGleyce" />
        </HeaderNavContent>
      </HeaderNav>
    </Container>
  );
};

export default Header;
