import React from 'react';
import { FiEdit, FiTrash2, FiYoutube } from 'react-icons/fi';
import { Exercise } from '../../pages/Exercises';
import PaginationItem from './components/PaginationItem';
import { Actions, Container, Pagination, Table } from './styles';

interface TableListProps {
  data: any[];
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
  setModalOpen: (value: boolean) => void;
  setExerciseSelected: (value: any) => void;
  deleteExercise(exerciseId: string): void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number): any {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

function TableList({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
  data,
  setModalOpen,
  setExerciseSelected,
  deleteExercise,
}: TableListProps): JSX.Element {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Grupo de Exercício</th>
            <th>Link do Vídeo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((exercise: Exercise) => {
              return (
                <>
                  <tr>
                    <td>{exercise.name}</td>
                    <td>{exercise.exercise_group}</td>

                    <td>
                      <FiYoutube size={20} />
                    </td>

                    <td>
                      <Actions>
                        <FiEdit
                          size={20}
                          onClick={() => {
                            setModalOpen(true);
                            setExerciseSelected(exercise);
                          }}
                        />
                        <FiTrash2
                          size={20}
                          onClick={() => {
                            deleteExercise(exercise.id);
                          }}
                        />
                      </Actions>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>

      <Pagination>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && <div>...</div>}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page: number) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page: number) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <div>...</div>}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Pagination>
    </Container>
  );
}

export default TableList;
