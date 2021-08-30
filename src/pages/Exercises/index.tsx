import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ModalExercise from '../../components/modals/ModalExercise';
import TableList from '../../components/TableList';
import api from '../../services/api';
import { ButtonExercises, Container, ExerciseDash, Title } from './styles';

export interface Exercise {
  exercise_group: string;
  id: string;
  link: string;
  name: string;
}

const Exercises: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [exerciseSelected, setExerciseSelected] = useState<Exercise>();
  const [totalExercises, setTotalExercises] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

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
      const { data } = await api.get('/exercises', {
        params: {
          page: page - 1,
        },
      });

      setExercises(data.exercises);
      setTotalExercises(data.total);
      setLoading(false);
    }

    getExercises();
  }, [setExercises, page]);

  function clearData(): void {
    setExerciseSelected({} as Exercise);
  }

  async function loadExercises(): Promise<void> {
    try {
      const response = await api.get(`/exercises`);
      setExercises(response.data.exercises);
    } catch (error) {
      console.log(error);
    }
  }

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

          <TableList
            data={exercises}
            totalCountOfRegisters={totalExercises}
            currentPage={page}
            onPageChange={setPage}
            setModalOpen={setModalOpen}
            setExerciseSelected={setExerciseSelected}
            deleteExercise={deleteExercise}
          />

          <ModalExercise
            exercise={exerciseSelected}
            isOpen={modalOpen}
            setIsOpen={() => {
              setModalOpen(false);
              clearData();
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
