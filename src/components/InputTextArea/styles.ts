import styled from 'styled-components';

export const Container = styled.textarea`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 2px;
  padding: 16px 16px;
  font-size: 16px;
  border: 0;
  min-width: 100%;
  min-height: 120px;
  resize: none;

  &::placeholder {
    color: #b7b7cc;
  }
`;
