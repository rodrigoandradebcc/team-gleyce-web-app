import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

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

import teste from '../../assets/userProf.png';

interface Student {
  id: string;
  active: boolean;
  last_access: string;
  name: string;
  photo: string;
  plan: string;
}

const Student: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    setStudents([
      {
        id: uuid(),
        active: true,
        last_access: '10/10/2021',
        name: 'Teste do teste',
        photo: teste,
        plan: 'Personal',
      },
      {
        id: uuid(),
        active: false,
        last_access: '10/10/2021',
        name: 'Teste do teste',
        photo: teste,
        plan: 'Personal',
      },
      {
        id: uuid(),
        active: true,
        last_access: '10/10/2021',
        name: 'Teste do teste',
        photo: teste,
        plan: 'Personal',
      },
      {
        id: uuid(),
        active: false,
        last_access: '10/10/2021',
        name: 'Teste do teste',
        photo: teste,
        plan: 'Personal',
      },
      {
        id: uuid(),
        active: false,
        last_access: '10/10/2021',
        name: 'Teste do teste',
        photo: teste,
        plan: 'Personal',
      },
      {
        id: uuid(),
        active: false,
        last_access: '10/10/2021',
        name: 'Teste do teste',
        photo: teste,
        plan: 'Personal',
      },
      {
        id: uuid(),
        active: false,
        last_access: '10/10/2021',
        name: 'Teste do teste',
        photo: teste,
        plan: 'Personal',
      },
      {
        id: uuid(),
        active: false,
        last_access: '10/10/2021',
        name: 'Teste do teste',
        photo: teste,
        plan: 'Personal',
      },
      {
        id: uuid(),
        active: false,
        last_access: '10/10/2021',
        name: 'Teste do teste',
        photo: teste,
        plan: 'Personal',
      },
    ]);
  }, [students]);

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
          {students.map(({ id, active, last_access, name, photo, plan }) => (
            <CardStudent
              key={id}
              isActive={active}
              last_access={last_access}
              name={name}
              photo={photo}
              plan={plan}
            />
          ))}
        </ContainerCardsStudents>
      </Main>
    </Container>
  );
};

export default Student;
