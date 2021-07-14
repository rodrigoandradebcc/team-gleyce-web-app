import styled, { css } from 'styled-components';
import ReactModal from 'react-modal';

interface ModalProps {
  typeModal?: 'large' | 'medium' | 'small' | 'x-small';
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
