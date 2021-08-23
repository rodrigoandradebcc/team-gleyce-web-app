import React, { useState } from 'react';
import { FiMoreVertical, FiTrash2 } from 'react-icons/fi';
import { MdModeEdit } from 'react-icons/md';
import { ButtonIconDropdown, ButtonIconMenu, Container } from './styles';

interface TrainingProps {
  id: string;
  name: string;
  observation: string;
  note: string;
  expiration_date: string;
  user_id: string;
  training_frequency: string;
}

interface DropdownMenuProps {
  id: string;
  handleUpdateSelectedTraining: (idActual: string) => void;
  idActualSelectedTeste: string;
  handleDrawer: () => void;
  handleConfirmationModal: () => void;
  training: TrainingProps;
  setSelectedTraining: (training: TrainingProps) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  id,
  handleUpdateSelectedTraining,
  idActualSelectedTeste,
  handleDrawer,
  setSelectedTraining,
  training,
  handleConfirmationModal,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <ButtonIconMenu
        onClick={() => {
          if (idActualSelectedTeste === id && isVisible) {
            setIsVisible(false);
            handleUpdateSelectedTraining('');
          } else if (
            idActualSelectedTeste === id ||
            idActualSelectedTeste === ''
          ) {
            handleUpdateSelectedTraining(id);
            setIsVisible(true);
          } else if (idActualSelectedTeste !== id) {
            handleUpdateSelectedTraining(id);

            setIsVisible(true);
          }
        }}
      >
        <FiMoreVertical size={18} />

        {isVisible && idActualSelectedTeste === id && (
          <ul>
            <li>
              <ButtonIconDropdown
                onClick={() => {
                  setSelectedTraining(training);
                  handleDrawer();
                }}
              >
                <MdModeEdit size={16} />
                Editar
              </ButtonIconDropdown>
            </li>
            <li>
              <ButtonIconDropdown
                onClick={() => {
                  setSelectedTraining(training);
                  handleConfirmationModal();
                }}
              >
                <FiTrash2 size={16} />
                Remover
              </ButtonIconDropdown>
            </li>
          </ul>
        )}
      </ButtonIconMenu>
    </Container>
  );
};

export default DropdownMenu;
