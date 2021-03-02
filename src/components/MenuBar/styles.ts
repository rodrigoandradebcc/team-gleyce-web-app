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
  background: #fac600;
  width: 250px;
  border-right: 1px solid #e0e0e0;
  margin-right: 18px;
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
  align-items: flex-start;
`;

export const MenuButton = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  color: black;

  cursor: pointer;
  border-radius: 25px;
  outline: 0;
  padding: 16px 16px;

  button {
    border: 0;
  }

  & + button {
    margin-top: 16.5px;
  }

  > span {
    display: inline;
    margin-left: 19px;
    font-weight: bold;
    font-size: 16px;
    color: #fef0cd;
  }

  svg {
    color: #fef0cd;
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
