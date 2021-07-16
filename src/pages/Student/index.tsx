/* eslint-disable no-nested-ternary */
import { formatISO } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '../../components/ButtonRod';
import CardStudent from '../../components/CardStudent';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ModalAddStudent from '../../components/ModalAddStudent';
import ModalConfirmationDeleteStudent from '../../components/ModalConfirmationDeleteStudent';
import SearchInput from '../../components/SearchInput';
import Tabs from '../../components/TabsStudents';
import { useDebounce } from '../../hooks/Debounce';
import api from '../../services/api';
import SkeletonContainerGrid from './components/SkeletonContainerGrid';
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

// const currentDate = JSON.stringify(new Date());

const Student: React.FC = () => {
  const [users, setUsers] = useState<StudentProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [usersFiltered, setUsersFiltered] = useState<StudentProps[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<StudentProps>(
    {} as StudentProps,
  );

  function resetFilteredUsers(): void {
    setUsersFiltered([]);
  }

  async function filterUsers(name?: string): Promise<void> {
    setIsLoading(true);
    resetFilteredUsers();
    updateStudents(String(name));
    setIsLoading(false);
  }

  const handleResetUser = useCallback(() => {
    setSelectedStudent({} as StudentProps);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState(false);

  const studentType = [
    { id: '1', description: 'Todos' },
    { id: '2', description: 'Ativos' },
    { id: '3', description: 'Inativos' },
  ];

  const [filterSelectedTypeStudent, setFilterSelectedTypeStudent] = useState(
    studentType[0].description,
  );
  const updateStudents = useCallback(
    async (name?: string) => {
      if (filterSelectedTypeStudent === 'Todos') {
        if (name === 'undefined') {
          await api.get(`/users`).then(response => {
            setUsers(response.data);
          });
        } else {
          await api.get(`/users/filter-users?name=${name}`).then(response => {
            setUsers(response.data);
          });
        }
      } else if (filterSelectedTypeStudent === 'Ativos') {
        if (name === 'undefined') {
          await api.get(`/users/filter-users?active=true`).then(response => {
            setUsers(response.data);
          });
        } else {
          await api
            .get(`/users/filter-users?name=${name}&active=true`)
            .then(response => {
              setUsers(response.data);
            });
        }
      } else if (filterSelectedTypeStudent === 'Inativos') {
        if (name === 'undefined') {
          await api.get(`/users/filter-users?active=false`).then(response => {
            setUsers(response.data);
          });
        } else {
          await api
            .get(`users/filter-users?name=${name}&active=false`)
            .then(response => {
              setUsers(response.data);
            });
        }
      }
    },
    [filterSelectedTypeStudent],
  );

  function changeStudentTypes(content: string): void {
    setFilterSelectedTypeStudent(content);
  }

  function clearUser(): void {
    setSelectedStudent({
      id: '',
      full_name: '',
      cpf: '',
      date_of_birth: formatISO(new Date()),
      active: false,
      email: '',
      phone: '',
      password: '',
      last_acess: '',
      photo: '',
      plan_type: '',
      observation: '',
    });
  }

  useEffect(() => {
    filterUsers();
  }, [filterSelectedTypeStudent]);

  const { debounce } = useDebounce();

  const handleToggleModalAddStudent = useCallback(() => {
    clearUser();
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleToggleModalConfirmation = useCallback(() => {
    setModalConfirmationOpen(!modalConfirmationOpen);
  }, [modalConfirmationOpen]);

  const handleToggleActiveUser = useCallback(
    async (id: string) => {
      const findUser = users.find(student => student.id === id);

      if (!findUser) {
        return;
      }

      try {
        await api.patch(`/users/change-active/${id}`, {
          active: !findUser?.active,
        });
        setUsers(oldStudents =>
          oldStudents.map(oldStudent =>
            oldStudent.id === id
              ? { ...oldStudent, active: !findUser.active }
              : oldStudent,
          ),
        );
        filterUsers();
      } catch ({ err }) {
        console.log(err);
      }
    },
    [users],
  );

  return (
    <>
      <MenuBar />

      <div id="mainContainer">
        <Header />
        <Container>
          <h1>Alunos</h1>
          <Tabs
            tabsApi={studentType}
            setStudentTypeSelected={changeStudentTypes}
          />

          <ActionArea>
            <SearchInput
              placeholder="Pesquise por nome, sobrenome, e-mail ou CPF"
              name="search"
              onChange={event =>
                debounce({
                  internalFunction: filterUsers,
                  event,
                })
              }
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
              <Result>{users.length} resultados</Result>
            </HeaderContent>

            {isLoading && <SkeletonContainerGrid />}

            <ContainerCardsStudents>
              {usersFiltered.length && !isLoading ? (
                <>
                  {usersFiltered.map(user => (
                    <CardStudent
                      key={user.id}
                      id={user.id}
                      user={user}
                      handleToggleActiveUser={() =>
                        handleToggleActiveUser(user.id)
                      }
                      handleToggleDrawer={handleToggleModalAddStudent}
                      handleToggleDeleteModal={handleToggleModalConfirmation}
                      setSelectedStudent={setSelectedStudent}
                    />
                  ))}
                </>
              ) : (
                users.length &&
                !isLoading && (
                  <>
                    {users.map(user => (
                      <CardStudent
                        key={user.id}
                        id={user.id}
                        user={user}
                        handleToggleActiveUser={() =>
                          handleToggleActiveUser(user.id)
                        }
                        handleToggleDrawer={handleToggleModalAddStudent}
                        handleToggleDeleteModal={handleToggleModalConfirmation}
                        setSelectedStudent={setSelectedStudent}
                      />
                    ))}
                  </>
                )
              )}

              {users.length === 0 && (
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
            updateStudents={updateStudents}
            editUser={selectedStudent}
            resetUser={handleResetUser}
          />

          <ModalConfirmationDeleteStudent
            isOpen={modalConfirmationOpen}
            setIsOpen={handleToggleModalConfirmation}
            idUserSelected={selectedStudent.id}
            updateUsers={updateStudents}
          />
        </Container>
      </div>
    </>
  );
};

export default Student;
