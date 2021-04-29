import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 2px;
  padding: 16px 16px;
  width: 100%;
  font-size: 16px;
  & + div {
    margin-top: 24px;
  }
  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #b7b7cc;
    &::placeholder {
      color: #b7b7cc;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
