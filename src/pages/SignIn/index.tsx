import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import logoImg from '../../assets/logo-login.svg';
import Button from '../../components/ButtonRod';
import { useAuth } from '../../hooks/AuthContext';
import {
  AnimationContainer,
  Background,
  Container,
  Content,
  Input,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const { register, handleSubmit } = useForm();

  const handleSubmitSignIn = useCallback(
    (data: SignInFormData) => {
      signIn({ email: data.email, password: data.password });
    },
    [signIn],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="TeamGleyce" />

          <form action="" onSubmit={handleSubmit(handleSubmitSignIn)}>
            <h2>Fazer login</h2>

            <Input placeholder="E-mail" {...register('email')} />
            <Input
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
            <Button type="submit" fullWidth heightSize="big">
              Acessar Plataforma
            </Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
