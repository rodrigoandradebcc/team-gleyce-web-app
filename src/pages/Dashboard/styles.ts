import styled from 'styled-components';

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
  border-radius: 24px;
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

  width: 100%;
`;

export const NearestClasses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-left: 2.5%;

  width: 95%;
`;

export const HeadNearestClasses = styled.div`
  display: flex;
  align-items: center; //H
  justify-content: space-between;

  padding: 0 1rem;
  background: #eeeeee;
  width: 100%;
  height: 50px;
  font-weight: bold;
  border: 1px solid #d8d8d8;
`;

export const BodyNearestClasses = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  padding: 0 1rem;

  width: 100%;
`;
