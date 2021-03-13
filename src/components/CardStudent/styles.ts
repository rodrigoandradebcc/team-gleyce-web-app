import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--background);
  border-radius: 10px;
  margin-bottom: 20px;
`;

interface StatusStudentProps {
  isActive?: boolean;
}

export const StatusStudent = styled.div<StatusStudentProps>`
  display: flex;
  align-items: center;
  justify-content: center;

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

export const StudentPhoto = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 5px solid white;
`;

export const Status = styled.div`
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  bottom: -15px;

  padding: 5px 10px;
  color: var(--yellow);
  background-color: #3b3728;

  border-radius: 10px;
`;

export const StudentName = styled.h3`
  margin-bottom: 10px;
`;

export const Plan = styled.p`
  margin-bottom: 10px;
`;

export const LastAccess = styled.p`
  margin-bottom: 10px;
`;

export const SendMessage = styled.p`
  cursor: pointer;
  margin-bottom: 20px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
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
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
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
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
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
  padding: 0 10px;
  width: 100%;
`;

export const Go = styled.div`
  padding: 5px;
  cursor: pointer;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  svg {
    background: #fac600;
    border-radius: 24px;
    width: 60px;
    color: #000;
    transition: color 0.4s;
    padding: 5px;

    &:hover {
      color: #999;
    }
  }
`;
