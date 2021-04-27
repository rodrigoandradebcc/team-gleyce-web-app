import styled, { keyframes } from 'styled-components';

interface CircularProgressProps {
  size: number;
  borderSize: number;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<CircularProgressProps>`
  position: absolute;

  width: ${props => props.size && `${props.size}px`};
  height: ${props => props.size && `${props.size}px`};

  border: ${props => (props.borderSize ? `${props.borderSize}px` : '2px')} solid
    rgba(0, 0, 0, 0.1);
  border-left-color: #fff;

  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
