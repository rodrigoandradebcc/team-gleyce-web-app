import React, { useEffect, useState } from 'react';
import { FiMoreVertical, FiTrash2 } from 'react-icons/fi';
import { MdModeEdit } from 'react-icons/md';
import ButtonIcon from '../ButtonIcon';
import { ButtonIconMenu, Container, ButtonIconDropdown } from './styles';

interface DropdownMenuProps {
  id: string;
  handleUpdateSelectedTrainning: (idActual: string) => void;
  idActualSelectedTeste: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  id,
  handleUpdateSelectedTrainning: handleUpdateSelectedTraining,
  idActualSelectedTeste,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActualVisible, isSetActualVisible] = useState(
    idActualSelectedTeste === id,
  );

  useEffect(() => {
    console.log(`${idActualSelectedTeste === id}`);
  }, [id, idActualSelectedTeste]);

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
              <ButtonIconDropdown>
                <MdModeEdit size={16} />
                Editar
              </ButtonIconDropdown>
            </li>
            <li>
              <ButtonIconDropdown>
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
