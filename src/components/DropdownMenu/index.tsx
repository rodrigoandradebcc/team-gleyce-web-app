import React, { useEffect, useState } from 'react';
import { FiMoreVertical, FiTrash2 } from 'react-icons/fi';
import { MdModeEdit } from 'react-icons/md';
import { ButtonIconMenu, Container } from './styles';

interface DropdownMenuProps {
  id: string;
  handleUpdateSelectedTrainning: (idActual: string) => void;
  idActualSelectedTeste: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  id,
  handleUpdateSelectedTrainning,
  idActualSelectedTeste,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActualVisible, isSetActualVisible] = useState(
    idActualSelectedTeste === id,
  );

  useEffect(() => {
    console.log(`${idActualSelectedTeste === id}`);
  }, [id, idActualSelectedTeste]);

  useEffect(() => {
    console.log(`O SELECIONADO AGORA ${idActualSelectedTeste}`);
  }, [idActualSelectedTeste]);

  return (
    <Container>
      <ButtonIconMenu
        onClick={() => {
          if (idActualSelectedTeste === id && isVisible) {
            setIsVisible(false);
            handleUpdateSelectedTrainning('');
          } else if (
            idActualSelectedTeste === id ||
            idActualSelectedTeste === ''
          ) {
            handleUpdateSelectedTrainning(id);
            setIsVisible(true);
          } else if (idActualSelectedTeste !== id) {
            handleUpdateSelectedTrainning(id);

            setIsVisible(true);
          }
        }}
      >
        <FiMoreVertical size={18} />

        {isVisible && idActualSelectedTeste === id && (
          <ul>
            <li>
              <a href="/">
                <MdModeEdit size={16} />
                Editar
              </a>
            </li>
            <li>
              <a href="/">
                <FiTrash2 size={16} />
                Remover
              </a>
            </li>
          </ul>
        )}
      </ButtonIconMenu>
    </Container>
  );
};

export default DropdownMenu;
