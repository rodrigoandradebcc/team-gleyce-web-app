import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Select, { OptionsType } from 'react-select';
import Button from '../../components/ButtonRod';
import ExerciseRow from '../../components/ExerciseRow';
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
  const [plans, setPlans] = useState<PlanProps[]>([] as PlanProps[]);
  const [exercises, setExercises] = useState<Exercises[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<OptionsProps[]>(
    [],
  );

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

  useEffect(() => {
    getPlansToUser(idSelected);
  }, [idSelected]);

  return (
    <S.Container>
      <h1>Plan</h1>
      {/* <S.ContainerCards>
        {plans?.map(({ id, description }) => (
          <S.PlanCard>{description}</S.PlanCard>
        ))}
      </S.ContainerCards> */}

      <Tabs tabsApi={plans} />
      <S.SelectContainer>
        <S.SelectAndButton>
          <Select
            options={options}
            isMulti
            onChange={(e: OptionsType<OptionsProps>) => {
              handleSetSelectedExercises(e);
            }}
          />
          <Button background="#FCA311">APLICAR</Button>
        </S.SelectAndButton>
        <Button outlined outlinedColor="#1976D2">
          CADASTRAR EXERCÍCIO
        </Button>
      </S.SelectContainer>

      {selectedExercises &&
        selectedExercises.map(({ label, value }) => (
          <ExerciseRow key={value}>{label}</ExerciseRow>
        ))}

      {/* <S.ContainerExercises>EXERCÍCIOS</S.ContainerExercises> */}

      <Button outlined outlinedColor="#4CAF50" onClick={() => {}}>
        SALVAR TREINO
      </Button>
    </S.Container>
  );
};

export default Plans;
