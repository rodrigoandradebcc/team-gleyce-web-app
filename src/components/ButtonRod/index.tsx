import React, { ButtonHTMLAttributes } from 'react';
import CircularProgress from '../CircularProgress';
import { Container, ContainerLoading, ChildrenLoading } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  heightSize?: 'small' | 'medium' | 'large' | 'big' | undefined;
  fullWidth?: boolean;
  outlined?: boolean;
  outlinedColor?: string;
  fontSize?: number;
  background?: string;
  disabled?: boolean;
  fontColor?: string;
}

const ButtonRod: React.FC<ButtonProps> = ({
  background,
  fontSize,
  fontColor,
  disabled = false,
  children,
  heightSize,
  loading = false,
  outlined,
  fullWidth,
  outlinedColor,
  ...buttonHTMLProps
}) => {
  return (
    <Container
      background={background}
      disabled={disabled}
      fontSize={fontSize}
      fontColor={fontColor}
      heightSize={heightSize}
      outlined={outlined}
      fullWidth={fullWidth}
      loading={loading}
      outlinedColor={outlinedColor}
      {...buttonHTMLProps}
    >
      {loading ? (
        <ContainerLoading>
          <CircularProgress />
          <ChildrenLoading>{children}</ChildrenLoading>
        </ContainerLoading>
      ) : (
        children
      )}
    </Container>
  );
};

export default ButtonRod;
