import styled, { css } from 'styled-components';

interface PaginationItemProps {
  isCurrent: boolean;
}

export const Container = styled.div<PaginationItemProps>`
  button {
    width: 32px;
    height: 32px;
    background: #f7f7f7;
    border: 0.5px solid #bbbbbb;
    border-radius: 2px;

    ${props =>
      props.isCurrent &&
      css`
        border: 1px solid #fca311;
        color: #fca311;
      `};
  }
`;
