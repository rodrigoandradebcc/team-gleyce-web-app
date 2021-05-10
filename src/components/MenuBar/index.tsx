import React, { useCallback, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { useLocation } from 'react-router';

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

import logoImg from '../../assets/logoblack.svg';
import { useAuth } from '../../hooks/AuthContext';

interface Link {
  to: string;
  title: string;
  icon: IconType;
  selected: boolean;
  callBack?: () => void;
}

const MenuBar: React.FC = () => {
  const { pathname } = useLocation();
  const { signOut } = useAuth();

  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    let tempLinks: Link[] = [
      {
        to: '/',
        title: 'Dashboard',
        icon: HomeIcon,
        selected: false,
      },
      {
        to: '/schedule',
        title: 'Agenda',
        icon: AgendaIcon,
        selected: false,
      },
      // {
      //   to: '/trainings',
      //   title: 'Treinos',
      //   icon: ExerciseIcon,
      // active: false
      // },
      {
        to: '/exercises',
        title: 'Exercícios',
        icon: ExerciseIcon,
        selected: false,
      },
      {
        to: '/students',
        title: 'Alunos',
        icon: ClientIcon,
        selected: false,
      },
      {
        to: '/prices',
        title: 'Preços',
        icon: PriceIcon,
        selected: false,
      },
      {
        to: '/profile',
        title: 'Perfil',
        icon: PerfilIcon,
        selected: false,
      },
      {
        to: '/',
        title: 'Sair',
        icon: ExitIcon,
        selected: false,
        callBack: signOut,
      },
    ];

    tempLinks = tempLinks.map(tempLink => {
      if (tempLink.to === pathname) {
        return {
          ...tempLink,
          selected: true,
        };
      }

      return tempLink;
    });

    setLinks(tempLinks);
  }, [pathname, signOut]);

  const handleSelectLinkMenu = useCallback((indexSend: number) => {
    setLinks(oldLinks =>
      oldLinks.map((link, index) => {
        if (index === indexSend) {
          return {
            ...link,
            selected: true,
          };
        }

        return {
          ...link,
          selected: false,
        };
      }),
    );
  }, []);

  return (
    <Container>
      <ContainerLogo>
        <Logo src={logoImg} alt="Logo Gleyce Cristina" />
      </ContainerLogo>
      <ContainerLinks>
        {links.map(({ to, icon: Icon, selected, callBack }, index) => (
          <MenuButton
            to={to}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => {
              handleSelectLinkMenu(index);
              if (callBack) {
                callBack();
              }
            }}
            selected={selected}
          >
            <Icon />
          </MenuButton>
        ))}
      </ContainerLinks>
    </Container>
  );
};

export default MenuBar;
