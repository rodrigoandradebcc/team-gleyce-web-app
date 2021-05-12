import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

// import { Container } from './styles';

interface Exercise {
  name: string;
  exerciseId: string;
}

interface Prescription {
  prescriptionId: string;
  repetition: string;
  serie: string;
  weight: string;
  interval: string;
  observation: string;
}

interface TrainingsProps {
  planName: string;
  exercise: Exercise[];
  prescription: Prescription[];
}

interface TrainingSetupContextProps {
  trainingCompleted: TrainingsProps[];
  setupTrainingCompletedItem: (training: TrainingsProps) => void;
  tab: string;
  changeTabActive: (name: string) => void;
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
  const trainingCompleted: TrainingsProps[] = [];
  const [tabContextActive, setTabContextActive] = useState('');

  function changeTabActive(name: string): void {
    setTabContextActive(name);
  }

  const setupTrainingCompletedItem = useCallback(
    async ({ planName, exercise, prescription }) => {
      // console.log('cheguei no context', planName);
    },
    [],
  );

  return (
    <TrainingSetupContext.Provider
      value={{
        trainingCompleted,
        changeTabActive,
        setupTrainingCompletedItem,
        tab: tabContextActive,
      }}
    >
      {children}
    </TrainingSetupContext.Provider>
  );
};

export function useTrainingSetup(): TrainingSetupContextProps {
  const context = useContext(TrainingSetupContext);

  if (!context) {
    throw new Error('useAuth must be used within an TrainingProvider');
  }

  return context;
}
