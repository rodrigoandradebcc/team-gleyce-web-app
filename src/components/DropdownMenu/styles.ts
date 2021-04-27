import styled, { keyframes } from 'styled-components';
import ButtonIcon from '../ButtonIcon';

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;

  ul {
    animation: ${appearAnimation} 0.2s ease-out;

    position: absolute;
    flex-direction: column;
    z-index: 2;
    top: 2rem;
    left: -32px;
    background: var(--white);

    height: auto;

    filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
  }

  ul li {
    list-style-type: none;
    padding: 16px 24px;

    a {
      color: #bbbbbb;
      text-decoration: none;
      text-transform: capitalize;
      display: flex;
      justify-content: center;

      svg {
        margin-right: 8px;
      }
    }

    a:hover {
      color: var(--text-body);
    }
  }
`;

export const ButtonIconMenu = styled(ButtonIcon)`
  svg {
    margin-right: 0px;
  }
`;
