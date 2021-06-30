import styled, { keyframes, css } from 'styled-components';

const isPassing = keyframes`
  from{
    transform: translateX(-100%);
  }
`;

const isPulsing = keyframes`
  to {
    opacity: .35;
  }
`;

interface PlaceholderVerticalProps {
  isLoading?: boolean;
  animationMode?: 'pulsing' | 'passing';
}

export const PlaceholderVertical = styled.div<PlaceholderVerticalProps>`
  width: 19rem;
  height: 13rem;
  background: var(--gray-1);

  overflow: hidden;
  position: relative;

  ${props =>
    props.animationMode === 'pulsing'
      ? css`
          animation: ${isPulsing} 0.3s ease-in alternate infinite;
        `
      : css`
          &:before {
            animation: ${isPassing} 0.6s ease-in infinite;
          }
        `}

  &:before {
    background: linear-gradient(to right, transparent, #fff 50%, transparent);
    content: '';
    display: block;
    height: 50vh;
    width: 50vw;
    position: absolute;
  }
`;
