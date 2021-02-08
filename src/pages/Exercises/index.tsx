import React, { useEffect, useState, useCallback } from 'react';
import { FiYoutube, FiEdit, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import ModalAddExercise from '../../components/ModalAddExercise';
import ModalEditExercise from '../../components/ModalEditExercise';

import {
  Container,
  Welcome,
  Message,
  ScreenName,
  ExerciseList,
  Head,
  HeadColumn,
  RegisterButton,
  Body,
  Line,
  Column,
  Name,
  Group,
  LinkVideo,
  Actions,
  EmptySpace,
} from './styles';

interface IExercise {
  exercise_group: string;
  id: string;
  link: string;
  name: string;
}

const Exercises: React.FC = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingExercise, setEditingExercise] = useState<IExercise>(
    {} as IExercise,
  );

  useEffect(() => {
    async function getExercises(): Promise<void> {
      const { data: exercisesReturned } = await api.get<IExercise[]>(
        '/exercises',
      );

      setExercises(exercisesReturned);
    }

    getExercises();
  }, [setExercises]);

  const handleToggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleToggleEditModal = useCallback(() => {
    setEditModalOpen(!editModalOpen);
  }, [editModalOpen]);

  const handleAddExercise = useCallback(
    async (newExercise: IExercise) => {
      const { data: exerciseCreated } = await api.post<IExercise>(
        '/exercises',
        newExercise,
      );

      setExercises([...exercises, exerciseCreated]);
    },
    [exercises],
  );

  const handleUpdateExercise = useCallback(() => {
    console.log('siwuhfdshuf');
  }, []);

  const handleDeleteExercise = useCallback(() => {
    console.log('siwuhfdshuf');
  }, []);

  const handleEditExercise = useCallback(async (exercise: IExercise) => {
    setEditingExercise(exercise);
    handleToggleEditModal();
  }, []);

  return (
    <Container>
      <Welcome>
        <Message>Bem vindo, FULANO DE TAL</Message>
        <ScreenName>Exercícios</ScreenName>
      </Welcome>

      <ExerciseList>
        <Head>
          <HeadColumn>NOME</HeadColumn>
          <HeadColumn>GRUPO DO EXERCÍCIO</HeadColumn>
          <HeadColumn center>LINK DO VÍDEO</HeadColumn>
          <HeadColumn center>AÇÕES</HeadColumn>
          <HeadColumn>
            <RegisterButton onClick={() => handleToggleModal()}>
              CADASTRAR EXERCÍCIO
            </RegisterButton>
          </HeadColumn>
        </Head>
        <Body>
          {exercises.map(({ id, name, exercise_group, link }) => (
            <Line key={id}>
              <Column>
                <Name>{name}</Name>
              </Column>
              <Column>
                <Group>{exercise_group}</Group>
              </Column>
              <Column center>
                <LinkVideo href={link} target="_blank">
                  <FiYoutube />
                </LinkVideo>
              </Column>
              <Column>
                <Actions>
                  <FiEdit
                    onClick={() => {
                      handleEditExercise({ id, name, exercise_group, link });
                    }}
                  />
                  <FiTrash2 onClick={() => handleDeleteExercise()} />
                </Actions>
              </Column>
              <Column>
                <EmptySpace />
              </Column>
            </Line>
          ))}
        </Body>
      </ExerciseList>

      <ModalAddExercise
        isOpen={modalOpen}
        setIsOpen={handleToggleModal}
        handleAddExercise={handleAddExercise}
      />

      <ModalEditExercise
        isOpen={editModalOpen}
        setIsOpen={handleToggleEditModal}
        handleUpdateExercise={handleUpdateExercise}
        edittingExercise={editingExercise}
        deleteExercise={handleDeleteExercise}
      />
    </Container>
  );
};

export default Exercises;
