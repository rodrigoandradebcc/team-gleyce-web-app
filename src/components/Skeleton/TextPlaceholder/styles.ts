import styled from 'styled-components';

interface TextPlaceholderProps {
  percentageWidth?: number;
  heightSize?: number;
}

export const Container = styled.div<TextPlaceholderProps>`
  background-color: var(--gray-2);
  display: inline-block;
  height: ${props => (props.heightSize ? `${props.heightSize}px` : '9px')};
  margin: 5px;
  width: ${props =>
    props.percentageWidth ? `${props.percentageWidth}%` : '50%'};
`;
