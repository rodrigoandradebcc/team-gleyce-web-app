import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { FiEdit, FiTrash2, FiYoutube } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ModalExercise from '../../components/modals/ModalExercise';
import api from '../../services/api';
import {
  Body,
  ButtonExercises,
  Container,
  ExerciseDash,
  IconGroup,
  Title,
} from './styles';

interface IExercise {
  exercise_group: string;
  id: string;
  link: string;
  name: string;
}

const Exercises: React.FC = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [exerciseSelected, setExerciseSelected] = useState<IExercise>();

  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  async function deleteExercise(id: string): Promise<void> {
    try {
      await api.delete(`/exercises/${id}`);
      loadExercises();
      toast.success('Exercício excluído com sucesso!');
    } catch (error) {
      toast.error('Exercício excluído com sucesso!');
    }
  }

  useEffect(() => {
    async function getExercises(): Promise<void> {
      const { data: exercisesReturned } = await api.get<IExercise[]>(
        '/exercises',
      );

      setExercises(exercisesReturned);
      setLoading(false);
    }

    getExercises();
  }, [setExercises]);

  function clearData(): void {
    setExerciseSelected({} as IExercise);
  }

  async function loadExercises(): Promise<void> {
    await api.get(`/exercises`).then(response => {
      setExercises(response.data);
    });
  }

  const data = loading
    ? []
    : exercises.map(row => ({
        Id: row.id,
        Name: row.name,
        group: row.exercise_group,
        link: <FiYoutube size={20} />,
        actions: (
          <IconGroup>
            <FiEdit
              size={20}
              onClick={() => {
                setModalOpen(true);
                setExerciseSelected(row);
              }}
            />
            <FiTrash2
              size={20}
              onClick={() => {
                deleteExercise(row.id);
              }}
            />
          </IconGroup>
        ),
      }));

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Grupo de exercício',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'Link do video',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
    },
  ];

  return (
    <>
      <MenuBar />
      <div id="mainContainer">
        <Header />

        <Container>
          <ExerciseDash>
            <Title>Exercícios</Title>
            <ButtonExercises onClick={() => setModalOpen(true)}>
              CADASTRAR EXERCÍCIO
            </ButtonExercises>
          </ExerciseDash>

          <Body>
            <Table dataSource={data} columns={columns} />
          </Body>

          <ModalExercise
            exercise={exerciseSelected}
            isOpen={modalOpen}
            setIsOpen={() => {
              setModalOpen(false);
            }}
            clearData={clearData}
            loadExercises={loadExercises}
          />
        </Container>
      </div>
    </>
  );
};

export default Exercises;
