import styled, { css } from 'styled-components';

export const Cell = styled.td`
  height: 3.125rem;
`;

interface CellProps {
  isCellFocused?: boolean;
}

export const InputCell = styled.input<CellProps>`
  padding: 1rem 1rem;

  ${props =>
    props.isCellFocused &&
    css`
      border: 1px solid var(--yellow);
      background: red;
    `}

  &:hover {
    border: 1px solid var(--yellow);
  }
`;
