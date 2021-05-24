import React, { useCallback, useEffect, useState } from 'react';
import Button from '../../components/ButtonRod';
import CardStudent from '../../components/CardStudent';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ModalAddStudent from '../../components/ModalAddStudent';
import SearchInput from '../../components/SearchInput';
import Tabs from '../../components/TabsPlans';
import api from '../../services/api';
import {
  ActionArea,
  Container,
  ContainerCardsStudents,
  HeaderContent,
  ListStudentEmpty,
  Main,
  Result,
} from './styles';

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

  const trainingTypes = [
    { id: '1', description: 'Todos' },
    { id: '2', description: 'Ativos' },
    { id: '3', description: 'Inativos' },
  ];

  useEffect(() => {
    api.get('/users').then(response => {
      setStudents(response.data);
    });
  }, [students]);

  const handleToggleModalAddStudent = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleToggleActiveUser = useCallback(
    async (id: string) => {
      const findUser = students.find(student => student.id === id);

      if (!findUser) {
        return;
      }

      try {
        await api.patch(`/users/change-active/${id}`, {
          active: !findUser?.active,
        });

        setStudents(oldStudents =>
          oldStudents.map(oldStudent =>
            oldStudent.id === id
              ? { ...oldStudent, active: !findUser.active }
              : oldStudent,
          ),
        );
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
    <>
      <MenuBar />

      <div id="mainContainer">
        <Header />
        <Container>
          <h1>Alunos</h1>
          <Tabs tabsApi={trainingTypes} />

          <ActionArea>
            <SearchInput
              placeholder="Pesquise por nome, sobrenome, e-mail ou CPF"
              name="search"
            />
            <Button
              background="#1E1E1E"
              onClick={() => handleToggleModalAddStudent()}
            >
              CADASTRAR ALUNO
            </Button>
          </ActionArea>

          <Main>
            <HeaderContent>
              <Result>{students.length} resultados</Result>
            </HeaderContent>
            <ContainerCardsStudents>
              {students.length ? (
                students.map(
                  ({ id, last_acess, full_name, photo, active, plan_type }) => (
                    <CardStudent
                      key={id}
                      id={id}
                      isActive={active}
                      last_access={last_acess}
                      name={full_name}
                      photo={photo}
                      plan_type={plan_type}
                      handleToggleActiveUser={() => handleToggleActiveUser(id)}
                    />
                  ),
                )
              ) : (
                <ListStudentEmpty>
                  Você não possui alunos cadastrados. Clique no botão
                  &quot;Cadastrar Aluno&quot; para que eles sejam exibidos aqui!
                </ListStudentEmpty>
              )}
            </ContainerCardsStudents>
          </Main>

          <ModalAddStudent
            isOpen={modalOpen}
            setIsOpen={handleToggleModalAddStudent}
          />
        </Container>
      </div>
    </>
  );
};

export default Student;
