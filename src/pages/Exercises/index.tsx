import React, { useEffect, useState, useCallback } from 'react';
import { FiYoutube, FiEdit, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import ModalAddExercise from '../../components/ModalAddExercise';
import ModalEditExercise from '../../components/ModalEditExercise';
import ModalDeleteExercise from '../../components/ModalDeleteExercise';

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
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';

interface IExercise {
  exercise_group: string;
  id: string;
  link: string;
  name: string;
}

const Exercises: React.FC = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingExercise, setEditingExercise] = useState<IExercise>(
    {} as IExercise,
  );
  const [deletingExercise, setDeletingExercise] = useState('');

  useEffect(() => {
    async function getExercises(): Promise<void> {
      const { data: exercisesReturned } = await api.get<IExercise[]>(
        '/exercises',
      );

      setExercises(exercisesReturned);
    }

    getExercises();
  }, [setExercises, refresh]);

  const handleToggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleToggleEditModal = useCallback(() => {
    setEditModalOpen(!editModalOpen);
  }, [editModalOpen]);

  const handleToggleDeleteModal = useCallback(
    (id: string) => {
      setDeleteModalOpen(!deleteModalOpen);
      setDeletingExercise(id);
    },
    [deleteModalOpen],
  );

  const handleAddExercise = useCallback(
    async (newExercise: IExercise) => {
      try {
        const { data: exerciseCreated } = await api.post<IExercise>(
          '/exercises',
          newExercise,
        );

        setExercises([...exercises, exerciseCreated]);
      } catch ({ err }) {
        console.log(err);
      }
    },
    [exercises],
  );

  const handleUpdateExercise = useCallback(async (exercise: IExercise) => {
    try {
      await api.put(`/exercises/${exercise.id}`, exercise);
      setRefresh(!refresh);
    } catch ({ err }) {
      console.log(err);
    }
  }, []);

  const handleDeleteExercise = useCallback(async (id: string) => {
    console.log(id);
    try {
      await api.delete(`/exercises/${id}`);
      setRefresh(!refresh);
    } catch ({ err }) {
      console.log(err);
    }
  }, []);

  const handleEditExercise = useCallback(
    (exercise: IExercise) => {
      setEditingExercise(exercise);
      handleToggleEditModal();
    },
    [handleToggleEditModal],
  );

  return (
    <>
      <MenuBar />

      <div id="mainContainer">
        <Header />

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
                          handleEditExercise({
                            id,
                            name,
                            exercise_group,
                            link,
                          });
                        }}
                      />
                      <FiTrash2 onClick={() => handleToggleDeleteModal(id)} />
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
            editingExercise={editingExercise}
          />

          <ModalDeleteExercise
            isOpen={deleteModalOpen}
            setIsOpen={() => setDeleteModalOpen(!deleteModalOpen)}
            handleDeleteExercise={handleDeleteExercise}
            deletingExercise={deletingExercise}
          />
        </Container>
      </div>
    </>
  );
};

export default Exercises;
