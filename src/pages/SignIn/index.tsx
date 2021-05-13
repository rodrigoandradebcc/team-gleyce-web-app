import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
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

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

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

            <Input
              placeholder="E-mail"
              {...register('email')}
              error={errors.email}
            />

            <Input
              type="password"
              placeholder="Senha"
              {...register('password')}
              error={errors.password}
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
