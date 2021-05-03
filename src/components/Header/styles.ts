import styled from 'styled-components';

// export const Container = styled.nav`
//   display: flex;

//   -webkit-box-shadow: 1px -19px 32px 1px rgba(0, 0, 0, 0.75);
//   -moz-box-shadow: 1px -19px 32px 1px rgba(0, 0, 0, 0.75);
//   box-shadow: 1px -19px 32px 1px rgba(0, 0, 0, 0.75);
// `;

// export const HeaderNav = styled.nav`
//   background: #fac600;
//   display: flex;

//   height: 10vh;

//   width: 100%;

//   /* padding: 16px 56px; */
// `;

// export const HeaderNavContent = styled.nav`
//   /* max-width: 1440px; */
//   display: flex;

//   justify-content: flex-start;
//   align-items: center;
//   margin-left: 2rem;

//   > img {
//     height: 78px;
//   }
// `;

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1.4375rem 2.69rem;

  background: var(--background-menu);
  border-bottom: 1px solid #ddd;

  width: 100%;
  height: 4.875rem;
`;

export const Account = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  > span {
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 0.75rem;
  }
`;
