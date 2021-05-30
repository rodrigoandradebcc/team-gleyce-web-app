import styled, { css, keyframes } from 'styled-components';
import ReactModal from 'react-modal';

interface ModalProps {
  typeDrawer?: 'large' | 'medium';
}

export const ReactModalComponent = styled(ReactModal)<ModalProps>`
  ${props =>
    props.typeDrawer === 'large' &&
    css`
      max-width: 1200px;
    `}

  ${props =>
    props.typeDrawer === 'medium' &&
    css`
      max-width: 420px;
    `}
`;
