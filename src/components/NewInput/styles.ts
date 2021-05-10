import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 2px;
  width: 100%;
  font-size: 16px;

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  input {
    padding: 16px 16px;

    flex: 1;
    background: transparent;
    color: #b7b7cc;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
