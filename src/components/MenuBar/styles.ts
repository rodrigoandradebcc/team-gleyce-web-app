import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import {
  MdAssignment,
  MdHome,
  MdFitnessCenter,
  MdPeople,
  MdAttachMoney,
  MdPerson,
  MdReply,
} from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 24px;
`;

export const ContainerLogo = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 135px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface MenuButtonProps {
  selected: boolean;
}

export const MenuButton = styled(Link)<MenuButtonProps>`
  min-height: 80px;
  min-width: 100%;

  padding: 0 15px;

  background-color: ${props => (props.selected ? '#fca311' : '#ffffff')};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-decoration: none;
  color: black;

  cursor: pointer;
  outline: 0;

  transition: all 0.4s;

  button {
    border: 0;
  }

  & + button {
    margin-top: 16.5px;
  }

  > span {
    display: inline;
    font-weight: bold;
    margin-top: 5px;
    font-size: 14px;
    color: ${props => (props.selected ? '#ffffff' : '#6c757d')};
  }

  svg {
    color: ${props => (props.selected ? '#ffffff' : '#6c757d')};
  }

  &:hover {
    background-color: #fca311;

    > span {
      color: #fff;
    }

    svg {
      color: #fff;
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--secondary);
`;

export const HomeIcon = styled(MdHome)`
  ${iconCSS}
`;

export const AgendaIcon = styled(MdAssignment)`
  ${iconCSS}
`;

export const ExerciseIcon = styled(MdFitnessCenter)`
  ${iconCSS}
`;

export const ClientIcon = styled(MdPeople)`
  ${iconCSS}
`;

export const PriceIcon = styled(MdAttachMoney)`
  ${iconCSS}
`;

export const PerfilIcon = styled(MdPerson)`
  ${iconCSS}
`;

export const ExitIcon = styled(MdReply)`
  ${iconCSS}
`;
