import styled, { css } from 'styled-components';
import ButtonIcon from '../ButtonIcon';

export const ActionButtons = styled.div`
  position: absolute;
  opacity: 0;
  top: -30px;
  right: 0;
  background: #ffffff;
  border-radius: 2px;

  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
  border: 1px solid rgba(241, 241, 241, 0.5);

  display: flex;
`;

export const EditCardButton = styled(ButtonIcon)`
  height: 24px;
  svg {
    color: #afafaf;
  }

  svg:hover {
    color: #3d3d3d;
  }
`;

export const Container = styled.div`
  &:hover {
    ${ActionButtons} {
      opacity: 1;
      transition: opacity 0.8s ease;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  padding: 1rem 1rem;
  width: 19rem;
  height: auto;
  box-shadow: 2px 4px 6px rgba(181, 181, 181, 0.25);
  border-radius: 0.125rem;
  position: relative;
`;

interface StatusStudentProps {
  isActive?: boolean;
}

export const StatusStudent = styled.div<StatusStudentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 292px;
  height: 203px;

  position: relative;

  margin-bottom: 28px;

  border-radius: 50%;

  ${props =>
    props.isActive
      ? css`
          border: 5px solid var(--yellow);
        `
      : css`
          border: 5px solid #3b3728;
        `}
`;

export const Status = styled.div`
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  bottom: -1rem;

  padding: 0.32rem 0.625rem;
  color: var(--yellow);
  background-color: #3b3728;

  border-radius: 0.625rem;
`;

export const StudentName = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Plan = styled.p<StatusStudentProps>`
  color: ${props => !props.isActive && `#bbb`};
  font-weight: 500;
  font-size: 0.625rem;
  margin-bottom: 0.25rem;
`;

export const LastAccess = styled.p`
  font-weight: 500;
  font-size: 0.625rem;
  color: #bbb;
`;

export const SendMessage = styled.p`
  width: 9.125rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.81rem;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--yellow);
  border: 1.5px solid var(--yellow);
  border-radius: 3px;
  cursor: pointer;

  svg {
    height: 1rem;
    width: 1rem;
  }
`;

export const SwitchContainer = styled.div`
  margin-bottom: auto;
  display: flex;
`;

export const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 2.75rem;
  height: 1.375rem;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    top: 0.125rem;
    height: 1.13rem;
    width: 1.13rem;
    left: 0.125rem;
    bottom: 0.25rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--yellow);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--yellow);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1.375rem);
    -ms-transform: translateX(1.375rem);
    transform: translateX(1.375rem);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: auto;
  width: 100%;
`;

export const Go = styled.div`
  cursor: pointer;
  width: 7rem;
  height: 2.5rem;
  background: var(--yellow);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 0.125rem;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.75rem;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
`;

export const StudentPhoto = styled.div<StatusStudentProps>`
  filter: ${props => !props.isActive && `grayscale(1)`};
`;
