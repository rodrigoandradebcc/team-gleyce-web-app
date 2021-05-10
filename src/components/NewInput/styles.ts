import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored?: boolean;
}

export const Error = styled.div`
  color: #c53030;
  font-size: 0.75rem;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-start;

  background: #fff;
  border-radius: 2px;
  width: 100%;
  font-size: 16px;
  flex-direction: column;

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  input {
    padding: 16px 16px;
    width: 100%;

    flex: 1;
    background: transparent;
    color: #b7b7cc;

    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030 !important;
      `}

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
