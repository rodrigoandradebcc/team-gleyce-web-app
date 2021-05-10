import styled, { keyframes } from 'styled-components';
import signInBackground from '../../assets/peso.png';
import { NewInput } from '../../components/NewInput';

export const Input = styled(NewInput)`
  height: 4.5rem;

  border: 1px solid #dce2e6;

  &:first-child {
    border-radius: 22px 2px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 0px 2px 2px;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
    width: 26rem;

    ${Input} {
    }

    h2 {
      margin-bottom: 24px;
    }

    button {
      margin-top: 28px;
    }
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;

  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  /* place-content: center; */
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  img {
    max-width: 16.25rem;
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
