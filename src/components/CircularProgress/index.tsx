import React from 'react';
import { Container } from './styles';

interface CircularProgressProps {
  size?: number;
}

function calcCircularProgressBorderSize(size: number): number {
  const result = size / 10;

  return result + 2;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ size = 20 }) => {
  return (
    <Container size={size} borderSize={calcCircularProgressBorderSize(size)} />
  );
};

export default CircularProgress;
