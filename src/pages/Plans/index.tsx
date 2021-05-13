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
  const location = useLocation<HistoryProps>();
  const { idSelected: planIdSelected } = location.state;

  const [plans, setPlans] = useState<PlanProps[]>([] as PlanProps[]);
  const [openModal, setOpenModal] = useState(false);
  const [exercises, setExercises] = useState<Exercises[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<OptionsProps[]>(
    [],
  );

  const handleToggleModalAddPlan = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const { setupTrainingCompletedItem, tab } = useTrainingSetup();

  setupTrainingCompletedItem({
    planName: 'tarara',
    exercise: [],
    prescription: [],
  });

  const options = getNameExercises(exercises);

  // eslint-disable-next-line no-shadow
  function getNameExercises(exercises: Exercises[]): OptionsProps[] {
    const res = exercises.map(({ id, name }) => {
      return { value: id, label: name };
    });
    return res;
  }

  useEffect(() => {
    api.get('/exercises').then(response => {
      setExercises(response.data);
    });
  }, []);

  useEffect(() => {
    const getPlansToUser = async (id: string): Promise<void> => {
      await api.get(`/plans/${id}`).then(response => {
        setPlans(response.data);
      });
    };
    getPlansToUser(planIdSelected);
  }, [planIdSelected, plans]);

  function handleSetSelectedExercises(
    exercisesSel: OptionsType<OptionsProps>,
  ): void {
    setSelectedExercises(exercisesSel as OptionsProps[]);
  }

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
            tabsApi={plans}
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
