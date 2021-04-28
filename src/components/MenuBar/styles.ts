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
  padding: 0 1.37rem;
  width: 9rem;
  background: #ffffff;
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

  /* background-color: ${props => (props.selected ? '#fca311' : '#ffffff')}; */

  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  justify-content: space-between;
  align-items: center;

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
    /* display: inline; */
    display: block;
    margin-left: 0.375rem;
    flex: 1;
    text-align: left;
    font-weight: 500;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.75rem;
    color: ${props => (props.selected ? '#1e1e1e' : '#bbb')};
    transition: all 0.4s;
    /* color: ${props => (props.selected ? '#ffffff' : '#6c757d')}; */
  }

  svg {
    padding: 0.6rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: ${props => (props.selected ? '#ffffff' : '#bbb')};
    background: ${props => props.selected && `#fca311`};
    transition: all 0.4s;
  }

  &:hover {
    svg {
      background: #fca311;
    }
    > span {
      color: #1e1e1e;
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
