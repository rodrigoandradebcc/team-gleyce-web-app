import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Select, { OptionsType } from 'react-select';
import Button from '../../components/ButtonRod';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import Tabs from '../../components/TabsT';
import api from '../../services/api';
import ExerciseRow from './components/ExerciseRow';
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
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
    <>
      <MenuBar />

      <div id="mainContainer">
        <Header />
        <S.Container>
          <S.LabelAndButton>
            <h1>Plan</h1>
            <Button outlined outlinedColor="#FFBA01" type="submit">
              SALVAR TREINO
            </Button>
          </S.LabelAndButton>

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
            </S.SelectAndButton>
            <Button background="#FFBA01">CADASTRAR EXERCÍCIO</Button>
          </S.SelectContainer>

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
              {selectedExercises &&
                selectedExercises.map(({ label, value }) => (
                  <ExerciseRow key={value}>{label}</ExerciseRow>
                ))}
            </tbody>
          </table>
        </S.Container>
      </div>
    </>
  );
};

export default Plans;
