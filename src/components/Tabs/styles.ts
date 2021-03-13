import styled from 'styled-components';

interface Prop {
  active: boolean;
}

export const Container = styled.div`
  /* margin-top: 32px;
  margin-bottom: 32px; */
  display: flex;
  width: 100%;

  /* align-items: center;
  justify-content: space-between; */
`;

export const Tab = styled.button<Prop>`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;

  font-size: 18px;
  font-family: 'IBM Plex Sans', sans-serif;
  padding-bottom: 8px;

  position: relative;

  /* & + button {
    margin-left: 16px;
  } */

  transition: border-bottom 0.2s;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    content: '';
    height: 2px;
    width: ${props => (props.active ? '100%' : '0%')};

    background-color: #057c6b;
  }

  &:hover::after,
  button.active::after {
    transition: 0.8s;
    width: 100%;
  }
`;

export const ContainerTabs = styled.div`
  display: flex;
  margin-top: 32px;
  width: 100%;
  height: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.62rem, auto));
  grid-gap: 30px 32px;
`;
