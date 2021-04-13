import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: var(--white);
  min-height: 5rem;

  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  & + div {
    margin-top: 0.5rem;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  input {
    border-color: var(--border-input);
    border-radius: 2px;
    height: 50px;
    padding: 0 0.5rem;

    & + input {
      margin-left: 0.5rem;
    }
  }
`;
