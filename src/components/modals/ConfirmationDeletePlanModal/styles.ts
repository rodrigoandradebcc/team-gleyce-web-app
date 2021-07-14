import styled from 'styled-components';
import ButtonRod from '../../ButtonRod';
import Modal from '../../Modal';

export const ModalComponent = styled(Modal)`
  .react-modal-content-teste {
    padding: 40px 0;
  }
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    color: #3d3d3d;
  }

  h1 {
    margin-top: 2rem;
    font-weight: 500;
  }

  > p {
    span {
      display: block;
    }
    text-align: center;
    margin-top: 0.5rem;
    font-weight: 400;
  }
`;

export const ActionButtonsArea = styled.div`
  display: flex;
  margin-top: 2rem;

  > button {
    height: 3.125rem;
  }

  > button + button {
    margin-left: 0.5rem;
  }

  button:first-child {
    width: 164px;
  }

  button:last-child {
    width: 144px;
  }
`;

export const Button = styled(ButtonRod)``;
