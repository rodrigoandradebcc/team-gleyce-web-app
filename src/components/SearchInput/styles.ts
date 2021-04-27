import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  height: 2.5rem;

  border: none;
  border-radius: 0.125rem;

  /* padding-left: 2.875rem;
  padding-right: 0.75rem; */

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background: white;

  display: flex;

  svg {
    height: 100%;
    width: 2.875rem;
    padding: 0.687rem 0.75rem 0.687rem 1rem;
    color: #c7c7d3;
  }

  input {
    font-size: 0.75rem;
    font-family: 'IMB Plex Sans', sans-serif;
    font-weight: 500;
    height: 100%;
    border: none;
    flex: 1;
    padding-right: 0.75rem;

    ::placeholder {
      color: #c7c7d3;
    }
  }
`;
