import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Select, { OptionsType } from 'react-select';
import Button from '../../components/ButtonRod';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ModalAddPlan from '../../components/ModalAddPlan';
import Tabs from '../../components/TabsPlans';
import { useTrainingSetup } from '../../hooks/TrainingSetupContext';
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

  const [openModal, setOpenModal] = useState(false);
  // estado do modal da page plans

  const handleToggleModalAddPlan = useCallback(() => {
    console.log('plans - estado openModal', !openModal);

    setOpenModal(!openModal);
  }, [openModal]);

  const { setupTrainingCompletedItem, tab } = useTrainingSetup();

  useEffect(() => {
    // console.log('valor', tab);
    console.log('no useEffect', openModal);
  }, [openModal, tab]);

  setupTrainingCompletedItem({
    planName: 'tarara',
    exercise: [],
    prescription: [],
  });

  const planosTeste = [
    { id: '1', description: 'A' },
    { id: '2', description: 'B' },
    { id: '3', description: 'C' },
  ];

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

          <Tabs
            tabsApi={planosTeste}
            handleOpenModal={openModalState => setOpenModal(openModalState)}
          />
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
                  <ExerciseRow key={value} nameExercise={label}>
                    {label}
                  </ExerciseRow>
                ))}
            </tbody>
          </table>
        </S.Container>
        <ModalAddPlan isOpen={openModal} setIsOpen={handleToggleModalAddPlan} />
      </div>
    </>
  );
};

export default Plans;
