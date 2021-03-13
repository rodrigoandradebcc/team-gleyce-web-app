import React, { useCallback, useEffect, useState } from 'react';

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
import ModalAddStudent from '../../components/ModalAddStudent';

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
  plan_type: string;
  observation: string;
}

const Student: React.FC = () => {
  const [students, setStudents] = useState<StudentProps[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    api.get('/users').then(response => {
      setStudents(response.data);
    });
  }, []);

  const handleToggleModalAddStudent = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleToggleActiveUser = useCallback(
    async (id: string) => {
      const findUser = students.find(student => student.id === id);

      try {
        await api.put(`/users/${id}`, { active: findUser?.active });
      } catch ({ err }) {
        console.log(err);
      }
    },
    [students],
  );

  const handleAddStudent = useCallback(
    async ({
      full_name,
      cpf,
      date_of_birth,
      email,
      phone,
      password,
      observation,
      plan_type,
      active,
    }: Omit<StudentProps, 'id' | 'last_acess' | 'photo'>) => {
      try {
        const { data: studentCreated } = await api.post<StudentProps>(
          '/users',
          {
            full_name,
            cpf,
            date_of_birth,
            email,
            phone,
            password,
            plan_type,
            observation,
            last_acess: new Date(),
            active,
          },
        );

        setStudents([...students, studentCreated]);
      } catch ({ err }) {
        console.log(err);
      }
    },
    [students],
  );

  return (
    <Container>
      <Welcome>
        <Message>Bem vindo, FULANO DE TAL</Message>
        <ScreenName>Alunos | Ativos | Inativos</ScreenName>
      </Welcome>

      <Main>
        <HeaderContent>
          <Result>{students.length} resultados</Result>
          <ButtonCreateStudent onClick={() => handleToggleModalAddStudent()}>
            Cadastrar aluno
          </ButtonCreateStudent>
        </HeaderContent>
        <ContainerCardsStudents>
          {students.map(
            ({ id, last_acess, full_name, photo, active, plan_type }) => (
              <CardStudent
                key={id}
                id={id}
                isActive={active}
                last_access={last_acess}
                name={full_name}
                photo={photo}
                plan_type={plan_type}
                onClick={() => {
                  history.push('/trainings', {
                    idSelected: id,
                    studentName: full_name,
                  });
                }}
                handleToggleActiveUser={() => handleToggleActiveUser(id)}
              />
            ),
          )}
        </ContainerCardsStudents>
      </Main>

      <ModalAddStudent
        isOpen={modalOpen}
        setIsOpen={handleToggleModalAddStudent}
        handleAddStudent={handleAddStudent}
      />
    </Container>
  );
};

export default Student;
