import styled, { css } from 'styled-components';
import ReactModal from 'react-modal';

interface ModalProps {
  typeModal?: 'large' | 'medium';
}

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
    !props.typeModal &&
    css`
      max-width: 736px;
    `}
`;
