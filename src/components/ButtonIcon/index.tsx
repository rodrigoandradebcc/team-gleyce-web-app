import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonIcon: React.FC<IconButtonProps> = ({
  children,
  ...buttonHTMLProps
}) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Container {...buttonHTMLProps}>{children}</Container>
  );
};

export default ButtonIcon;
