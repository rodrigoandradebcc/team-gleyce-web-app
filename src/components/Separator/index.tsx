import React from 'react';
import { Container } from './styles';

interface SeparatorProps {
  color?: string;
  style?: React.CSSProperties;
}

const Separator: React.FC<SeparatorProps> = ({ color, style }) => {
  return <Container color={color} style={style} />;
};

export default Separator;
