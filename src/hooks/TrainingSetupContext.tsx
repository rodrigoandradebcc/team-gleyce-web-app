import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

// interface Exercise {
//   name: string;
//   exerciseId: string;
//   prescription: Prescription;
// }

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
  exercises: ExercisesSelectedProps[];
}

interface ExercisesSelectedProps {
  value: string;
  label: string;
  prescription: Prescription;
}

interface TrainingSetupContextProps {
  trainingCompleted: TrainingContextCompletedProps[];
  setupPlan: (training: TrainingContextCompletedProps) => void;
  tabPlanContext: string;
  changeTabPlanActive: (name: string) => void;
}

interface TrainingSetupProviderProps {
  children: ReactNode;
}

const TrainingSetupContext = createContext<TrainingSetupContextProps>(
  {} as TrainingSetupContextProps,
);

export const TrainingSetupProvider: React.FC<TrainingSetupProviderProps> = ({
  children,
}) => {
  // const trainingCompleted: TrainingsProps[] = [];
  const [tabContextActive, setTabContextActive] = useState('');

  function changeTabActive(name: string): void {
    setTabContextActive(name);
  }

  // COMPLETO
  const [trainingCompleted, setTrainingCompleted] = useState<
    TrainingContextCompletedProps[]
  >({} as TrainingContextCompletedProps[]);

  const changeCompletedTraining = useCallback(plan => {
    const newTrainingCompleted = {
      ...trainingCompleted,
      plan,
    };
    setTrainingCompleted(newTrainingCompleted);
  }, []);

  const setupPlan = useCallback(
    plan => {
      // changeCompletedTraining(plan);
      changeCompletedTraining(plan);
    },
    [changeCompletedTraining],
  );

  return (
    <TrainingSetupContext.Provider
      value={{
        trainingCompleted,
        changeTabPlanActive: changeTabActive,
        setupPlan,
        tabPlanContext: tabContextActive,
      }}
    >
      {children}
    </TrainingSetupContext.Provider>
  );
};

export function useTrainingSetup(): TrainingSetupContextProps {
  const context = useContext(TrainingSetupContext);

  if (!context) {
    throw new Error('use... must be used within an TrainingProvider');
  }

  return context;
}
