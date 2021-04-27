import React from 'react';

import { Container, IconWpp } from './styles';
import logoUser from '../../assets/userProf.png';

const PersonalClass: React.FC = () => {
  return (
    <Container>
      <img src={logoUser} alt="Logo" />
      <p>Fulano de Tal - 9h - 10/01/2021</p>
      <IconWpp />
    </Container>
  );
};

export default PersonalClass;
