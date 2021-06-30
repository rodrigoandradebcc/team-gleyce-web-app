import styled, { css } from 'styled-components';

interface ContainerSkeletonProps {
  paddingContainer?: boolean;
}

export const Container = styled.section<ContainerSkeletonProps>`
  display: flex;
  flex: 1;
  height: 100%;

  flex-direction: column;
  justify-content: center;

  ${props =>
    props.paddingContainer &&
    css`
      padding: 1rem 1rem;
    `}
`;
