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

interface ExercisesSelectedProps {
  value: string;
  label: string;
}

interface Prescription {
  prescriptionId: string;
  repetition: string;
  serie: string;
  weight: string;
  interval: string;
  observation: string;
}

interface TrainingContextCompletedProps {
  planName: string;
  exercises: ExercisesSelectedContextProps[];
}

interface ExercisesSelectedContextProps {
  value: string;
  label: string;
  prescription: Prescription;
}

const Plans: React.FC = () => {
  const location = useLocation<HistoryProps>();
  const { idSelected: planIdSelected } = location.state;

  const [plans, setPlans] = useState<PlanProps[]>([] as PlanProps[]);
  const [openModal, setOpenModal] = useState(false);
  const [exercises, setExercises] = useState<Exercises[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<
    ExercisesSelectedProps[]
  >([]);

  const handleToggleModalAddPlan = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const { setupPlan, tabPlanContext } = useTrainingSetup();

  const mockPrescription = {
    prescriptionId: '1',
    repetition: 'string',
    serie: 'string',
    weight: 'string',
    interval: 'string',
    observation: 'string',
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function mountObjectTrainingCompleted(
    selectedTab: string,
  ): TrainingContextCompletedProps {
    let newExercises: ExercisesSelectedContextProps[] = [];
    newExercises = [];

    selectedExercises.map(item => {
      return newExercises.push({
        ...item,
        prescription: mockPrescription,
      });
    });

    return {
      planName: selectedTab,
      exercises: newExercises,
    };
  }

  useEffect(() => {
    setupPlan(mountObjectTrainingCompleted(tabPlanContext));
  }, [tabPlanContext]);

  const options = getNameExercises(exercises);

  // eslint-disable-next-line no-shadow
  function getNameExercises(exercises: Exercises[]): ExercisesSelectedProps[] {
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
  }, [planIdSelected]);

  function handleSetSelectedExercises(
    exercisesSel: OptionsType<ExercisesSelectedProps>,
  ): void {
    setSelectedExercises(exercisesSel as ExercisesSelectedProps[]);
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
                onChange={(e: OptionsType<ExercisesSelectedProps>) => {
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
                  <ExerciseRow
                    key={value}
                    exercise={{ name: label, id: value }}
                    plan_id={tabPlanContext}
                  >
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
