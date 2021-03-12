import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import CardStudent from '../../components/CardStudent';

import {
  Container,
  Welcome,
  Message,
  ScreenName,
  Main,
  HeaderContent,
  Result,
  ButtonCreateStudent,
  ContainerCardsStudents,
} from './styles';

import api from '../../services/api';

interface Student {
  id: string;
  active: boolean;
  last_access: string;
  name: string;
  photo: string;
  plan: string;
}

interface StudentProps {
  id: string;
  full_name: string;
  cpf: string;
  date_of_birth: string;
  active: boolean;
  email: string;
  phone: string;
  password: string;
  last_acess: string;
  photo: string;
}

const Student: React.FC = () => {
  const [students, setStudents] = useState<StudentProps[]>([]);
  const [studentSelected, setStudentSelected] = useState<string>();

  const history = useHistory();

  useEffect(() => {
    api.get('/users').then(response => {
      setStudents(response.data);
    });
  }, []);

  useEffect(() => {
    console.log('SELECIONADO', studentSelected);
  }, [studentSelected]);

  console.log(students);

  return (
    <Container>
      <Welcome>
        <Message>Bem vindo, FULANO DE TAL</Message>
        <ScreenName>Alunos | Ativos | Inativos</ScreenName>
      </Welcome>

      <Main>
        <HeaderContent>
          <Result>{students.length} resultados</Result>
          <ButtonCreateStudent>Cadastrar aluno</ButtonCreateStudent>
        </HeaderContent>
        <ContainerCardsStudents>
          {students.map(
            ({
              id,
              last_acess,
              full_name,
              photo,
              cpf,
              date_of_birth,
              active,
              email,
              phone,
              password,
            }) => (
              <CardStudent
                key={id}
                isActive={active}
                last_access={last_acess}
                name={full_name}
                photo={photo}
                onClick={() => {
                  history.push('/trainings', {
                    idSelected: id,
                    studentName: full_name,
                  });
                }}
              />
            ),
          )}
        </ContainerCardsStudents>
      </Main>
    </Container>
  );
};

export default Student;
