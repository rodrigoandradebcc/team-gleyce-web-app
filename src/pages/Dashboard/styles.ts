import styled from 'styled-components';

interface ClassesContainerProps {
  color?: string;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  padding: 0.8125rem 2.69rem;

  /* overflow-y: auto; */

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 16px;

  width: inherit;

  strong {
    margin-top: 15px;
  }
`;

export const CardList = styled.div`
  display: flex;
  margin: 16px 0;
  flex-wrap: wrap;

  gap: 1rem;
`;

export const ClassesList = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1rem;
`;

export const ClassesContainer = styled.ul`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  background: white;
  box-shadow: 2px 4px 6px rgba(181, 181, 181, 0.25);

  min-width: 18.25rem;
  padding: 1rem;
  gap: 1.5rem !important;
`;

export const ClassesTitle = styled.li<ClassesContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: auto;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${props => props.color};
  }

  h3 {
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const Class = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2rem;
  padding-left: 1.1875rem;

  ::before {
    content: '';
    position: absolute;
    margin-left: -1rem;
    width: 0.1875rem;
    height: 2rem;
    background: #bbb;
    border-radius: 1.5px;
  }

  h4 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 0.625rem;
    color: #bbbbbb;
  }
`;
