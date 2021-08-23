import React from 'react';
import { Container } from './styles';

interface TextPlaceholderProps {
  percentageWidth?: number;
  heightSize?: number;
}

const TextPlaceholder: React.FC<TextPlaceholderProps> = ({
  heightSize,
  percentageWidth,
}) => {
  return (
    <Container heightSize={heightSize} percentageWidth={percentageWidth} />
  );
};

export default TextPlaceholder;
