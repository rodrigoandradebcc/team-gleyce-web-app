import React from 'react';
import Avatar from '../Avatar';

import { Container, Account } from './styles';

// import { Container, HeaderNav, HeaderNavContent } from './styles';
// import logoImg from '../../assets/logoblack.png';

const Header: React.FC = () => {
  // return (
  //   <Container>
  //     <HeaderNav>
  //       <HeaderNavContent>
  //         <img src={logoImg} alt="TeamGleyce" />
  //       </HeaderNavContent>
  //     </HeaderNav>
  //   </Container>
  // );

  return (
    <Container>
      <Account>
        <span>Admin</span>
        <Avatar size={2} src="" userName="Admin" />
      </Account>
    </Container>
  );
};

export default Header;
