import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: fit-content;
  border: ${props => props.isFocused && '1px solid var(--yellow)'};

  input {
    padding: 1rem 1rem;

    &:hover {
      border: 1px solid var(--yellow);
    }
  }
`;
