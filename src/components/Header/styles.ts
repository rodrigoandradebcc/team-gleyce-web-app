import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  /* justify-content: center; */
  /* align-items: flex-start; */
  /* box-shadow: 1px 1px 1px 1px black; */
  -webkit-box-shadow: 1px -19px 32px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px -19px 32px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 1px -19px 32px 1px rgba(0, 0, 0, 0.75);
`;

export const HeaderNav = styled.nav`
  background: #fac600;
  display: flex;

  height: 10vh;

  width: 100%;

  /* padding: 16px 56px; */
`;

export const HeaderNavContent = styled.nav`
  /* max-width: 1440px; */
  display: flex;

  justify-content: flex-start;
  align-items: center;
  margin-left: 2rem;

  > img {
    height: 78px;
  }
`;
