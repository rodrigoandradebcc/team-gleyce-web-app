import styled from 'styled-components';

interface SeparatorProps {
  color?: string;
}

export const Container = styled.div<SeparatorProps>`
  height: 1px;
  width: 100%;

  background-color: ${props =>
    props.color ? `${props.color}` : 'var(--green)'};
`;
