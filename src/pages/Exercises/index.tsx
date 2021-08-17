import React, { useEffect, useState, useCallback } from 'react';
import { FiYoutube, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { Table } from 'antd';
import api from '../../services/api';
import ModalExercise from '../../components/ModalAddExercise';
import {
  Container,
  Title,
  ButtonExercices,
  ButtonLink,
  IconGroup,
  ExerciseDash,
  Body,
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
  const [loading, setloading] = useState(true);
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
      setloading(false);
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

  const history = useHistory();

  const data = loading
    ? []
    : exercises.map(row => ({
        Id: row.id,
        Name: row.name,
        group: row.exercise_group,
        link: (
          <ButtonLink onClick={() => history.push(row.link)}>
            <FiYoutube size={20} />
          </ButtonLink>
        ),
        actions: (
          <IconGroup>
            <ButtonLink>
              <FiEdit size={20} />
            </ButtonLink>
            <ButtonLink>
              <FiTrash2 size={20} />
            </ButtonLink>
          </IconGroup>
        ),
      }));

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Grupo de exercício',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'Link do video',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
    },
  ];

  return (
    <>
      <MenuBar />
      <div id="mainContainer">
        <Header />

        <Container>
          <ExerciseDash>
            <Title>Exercícios</Title>
            <ButtonExercices onClick={() => handleToggleModal()}>
              CADASTRAR EXERCÍCIO
            </ButtonExercices>
          </ExerciseDash>

          <Body>
            <Table dataSource={data} columns={columns} />
          </Body>
          <ModalExercise isOpen={modalOpen} setIsOpen={handleToggleModal} />
        </Container>
      </div>
    </>
  );
};

export default Exercises;
