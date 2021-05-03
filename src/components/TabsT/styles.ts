import styled from 'styled-components';

interface Prop {
  active: boolean;
}

export const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 8px;
`;

export const Tab = styled.button<Prop>`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;

  font-size: 16px;
  padding-bottom: 8px;

  position: relative;
  color: ${props => (props.active ? '#1e1e1e' : '#bbbbbb')};

  transition: border-bottom 0.2s;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    content: '';
    height: 2px;
    width: ${props => (props.active ? '100%' : '0%')};

    background-color: var(--yellow);
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
  grid-template-columns: repeat(auto-fit, 128px);
  /* grid-gap: 30px 32px; */
`;
