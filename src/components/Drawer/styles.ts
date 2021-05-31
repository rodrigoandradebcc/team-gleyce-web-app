import styled, { css, keyframes } from 'styled-components';
import ReactModal from 'react-modal';

const drawerTransitionClose = keyframes`
 from{
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
`;

interface ModalProps {
  typeDrawer?: 'large' | 'medium' | 'small';
}

export const ReactModalComponent = styled(ReactModal)<ModalProps>`
  &.ReactModal__Content--before-close {
    animation: ${drawerTransitionClose} ease 400ms;
  }

  ${props =>
    props.typeDrawer === 'large' &&
    css`
      max-width: 1200px;
    `}

  ${props =>
    props.typeDrawer === 'medium' &&
    css`
      max-width: 640px;
    `}

  ${props =>
    props.typeDrawer === 'small' &&
    css`
      max-width: 420px;
    `}
`;
