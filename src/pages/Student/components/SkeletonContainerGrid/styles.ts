import styled from 'styled-components';
import ContainerSkeleton from '../../../../components/Skeleton/ContainerSkeleton';
import SpaceBetween from '../../../../components/Skeleton/SpaceBetween';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  gap: 2rem 1rem;
`;

export const ContainerSkeletonComponent = styled(ContainerSkeleton)``;

export const Top = styled(SpaceBetween)`
  margin-bottom: 1rem;
`;

export const DataPlaceholder = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  line-height: 0.75rem;

  > div:first-child {
    margin-bottom: 1.25rem;
  }
`;

export const Actions = styled(SpaceBetween)``;
