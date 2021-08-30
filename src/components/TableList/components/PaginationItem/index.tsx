/* eslint-disable react/button-has-type */
import React from 'react';
import { Container } from './styles';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps): JSX.Element {
  return (
    <Container isCurrent={isCurrent}>
      <button onClick={() => onPageChange(number)}>{number}</button>
    </Container>
  );
}

export default PaginationItem;
