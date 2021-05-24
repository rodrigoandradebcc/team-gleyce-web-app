import styled from 'styled-components';
import ButtonIcon from '../ButtonIcon';

interface Prop {
  active: boolean;
}

export const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 0.6rem;
`;

export const AddTabButton = styled(ButtonIcon)`
  padding-bottom: 0.5rem;
  color: #bbbbbb;
  width: fit-content;
  height: auto;
  padding: 4px;
  margin-left: 3rem;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0;
  }

  &:hover {
    /* filter: brightness(0.8); */
    background: rgba(187, 187, 187, 0.1);

    border-radius: 50%;
  }

  &:hover svg {
    color: #1e1e1e;
  }
`;

export const Tab = styled.button<Prop>`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;

  font-size: 1rem;
  padding-bottom: 0.5rem;

  position: relative;
  color: ${props => (props.active ? '#1e1e1e' : '#bbbbbb')};

  transition: border-bottom 0.2s;

  &::after {
    position: absolute;
    bottom: 0.125rem;
    left: 0;

    content: '';
    height: 0.1875rem;
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
  margin-top: 2rem;
  width: 100%;
  height: 1.25rem;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, 8rem);

  /* overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; */
`;
