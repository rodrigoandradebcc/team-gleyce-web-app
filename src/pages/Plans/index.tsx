import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Select, { OptionsType } from 'react-select';
import { useForm, FormProvider } from 'react-hook-form';
import Button from '../../components/ButtonRod';
import ExerciseRow from './components/ExerciseRow';
import Tabs from '../../components/Tabs';
import api from '../../services/api';
import * as S from './styles';

interface HistoryProps {
  idSelected: string;
}

export interface PlanProps {
  id: string;
  description: string;
}

interface Exercises {
  id: string;
  name: string;
  exercise_group: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

interface OptionsProps {
  value: any;
  label: string;
}

const Plans: React.FC = () => {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onSubmit = (data: any) => console.log('SUBMIT', data);
  const [plans, setPlans] = useState<PlanProps[]>([] as PlanProps[]);
  const [exercises, setExercises] = useState<Exercises[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<OptionsProps[]>(
    [],
  );

  console.log(exercises);

  const location = useLocation<HistoryProps>();

  const options = getNameExercises(exercises);

  // eslint-disable-next-line no-shadow
  function getNameExercises(exercises: Exercises[]): OptionsProps[] {
    const res = exercises.map(({ id, name }) => {
      return { value: id, label: name };
    });

    return res;
  }

  const { idSelected } = location.state;

  useEffect(() => {
    api.get('/exercises').then(response => {
      setExercises(response.data);
    });
  }, []);

  const getPlansToUser = (id: string): void => {
    api.get(`/plans/${id}`).then(response => {
      setPlans(response.data);
    });
  };

  function handleSetSelectedExercises(
    exercisesSel: OptionsType<OptionsProps>,
  ): void {
    setSelectedExercises(exercisesSel as OptionsProps[]);
  }

  console.log(selectedExercises);

  useEffect(() => {
    getPlansToUser(idSelected);
  }, [idSelected]);

  return (
    <S.Container>
      <h1>Plan</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Tabs tabsApi={plans} /> */}
        <S.SelectContainer>
          <S.SelectAndButton>
            <Select
              {...register('select_exercises')}
              options={options}
              isMulti
              onChange={(e: OptionsType<OptionsProps>) => {
                handleSetSelectedExercises(e);
              }}
            />
          </S.SelectAndButton>
          <Button outlined outlinedColor="#1976D2">
            CADASTRAR EXERCÍCIO
          </Button>
        </S.SelectContainer>

        {/* {selectedExercises &&
          selectedExercises.map(({ label, value }) => (
            <ExerciseRow key={value}>{label}</ExerciseRow>
          ))} */}

        {/* <S.ContainerExercises>EXERCÍCIOS</S.ContainerExercises> */}
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Séries</th>
              <th>Repetições</th>
              <th>Carga</th>
              <th>Intervalo</th>
              <th>Observação</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {selectedExercises &&
                selectedExercises.map(({ label, value }) => (
                  <ExerciseRow key={value}>{label}</ExerciseRow>
                ))}
            </tr>
          </tbody>
        </table>

        <Button outlined outlinedColor="#4CAF50" type="submit">
          SALVAR TREINO
        </Button>
      </form>
    </S.Container>
  );
};

export default Plans;
