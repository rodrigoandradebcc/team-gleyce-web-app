import styled, { css, keyframes } from 'styled-components';
import ReactModal from 'react-modal';

interface ModalProps {
  typeModal?: 'large' | 'medium' | 'small' | 'x-small';
}

const buttonCloseTransitionHover = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

const buttonCloseTransition = keyframes`
  from{
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

interface IconButtonCloseProps {
  mouseButton: boolean;
}

export const IconButtonClose = styled.button<IconButtonCloseProps>`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
  color: inherit;

  width: fit-content;
  height: fit-content;
  padding: 0.625rem;

  > svg {
    color: #eeeeee;

    animation: none;
    transition: color 900ms ease-in-out;

    ${props =>
      props.mouseButton &&
      css`
        animation: ${buttonCloseTransitionHover} ease-in 600ms;
      `}

    :hover {
      color: #3d3d3d;
      animation: ${buttonCloseTransition} ease-in 600ms;
    }
  }
`;

export const ContainerModal = styled.div`
  position: relative;
`;

export const ReactModalComponent = styled(ReactModal)<ModalProps>`
  ${props =>
    props.typeModal === 'large' &&
    css`
      max-width: 1200px;
    `}

  ${props =>
    props.typeModal === 'medium' &&
    css`
      max-width: 960px;
    `}

  ${props =>
    props.typeModal === 'small' &&
    css`
      max-width: 448px;
    `}

    ${props =>
    props.typeModal === 'x-small' &&
    css`
      max-width: 472px;
    `}

  ${props =>
    !props.typeModal &&
    css`
      max-width: 736px;
    `}
`;
