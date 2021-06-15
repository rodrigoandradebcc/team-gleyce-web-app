import React, { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiUserPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useFormattedDate } from '../../hooks/FormattedDate';
import api from '../../services/api';
import { InputTextArea } from '../InputTextArea';
import Modal from '../Modal';
import { LogoAndTitleModal } from '../ModalAddPlan/styles';
import { NewInput } from '../NewInput';
import { NewSelect } from '../NewSelect';
import NewSwitch from '../NewSwitch';
import * as S from './styles';

interface StudentProps {
  id: string;
  full_name: string;
  cpf: string;
  date_of_birth: string;
  active: boolean;
  email: string;
  phone: string;
  password: string;
  last_acess: string;
  photo: string;
  plan_type: string;
  observation: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  resetUser(): void;
  updateStudents(): void;
  editUser: StudentProps;
}

const ModalAddStudent: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  updateStudents,
  editUser,
  resetUser,
}) => {
  const { register, handleSubmit, reset, control } = useForm();
  const [defaultValues, setDefaultValues] = useState<StudentProps>(
    {} as StudentProps,
  );

  useEffect(() => {
    if (editUser) {
      setDefaultValues({ ...editUser });
    }
    reset(editUser);
  }, [reset, editUser]);

  function handle(data: StudentProps): void {
    const currentDate = String(new Date(Date.now()));

    const newData = {
      ...data,
      id: editUser.id && editUser.id,
      last_acess: currentDate,
      password: editUser.password ? editUser.password : data.password,
    };

    handleStudentSubmit(newData);
    setIsOpen();
  }

  const plans = [
    { label: 'Quinzenal', value: 'Quinzenal' },
    { label: 'Semestral', value: 'Semestral' },
    { label: 'Personal', value: 'Personal' },
  ];

  const handleStudentSubmit = useCallback(
    async (student: StudentProps): Promise<void> => {
      try {
        if (student.id) {
          await api.put(`/users/${student.id}`, student);
          toast.success('Aluno atualizado com sucesso!');
        } else {
          await api.post('/users', student);
          toast.success('Aluno cadastrado com sucesso!');
        }

        updateStudents();
      } catch (error) {
        toast.error(
          'Ocorreu um erro ao cadastrar um aluno, tente novamente mais tarde!',
        );
      }
    },
    [],
  );

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={() => {
        reset();
        resetUser();
        setIsOpen();
      }}
      typeModal="large"
    >
      <S.Form onSubmit={handleSubmit(handle)}>
        <LogoAndTitleModal>
          <FiUserPlus size={24} />
          <p>Cadastrar aluno</p>
        </LogoAndTitleModal>

        <div className="two-inputs">
          <div>
            <S.Label>Nome do aluno</S.Label>
            <NewInput
              placeholder="Ex: Fulano de tal"
              required
              {...register('full_name')}
              defaultValue={defaultValues?.full_name || ''}
            />
          </div>
          <div>
            <S.Label>Tipo de plano</S.Label>

            <NewSelect
              values={plans}
              {...register('plan_type')}
              defaultValue={defaultValues?.plan_type}
            />
          </div>
          <div>
            <S.Label>CPF</S.Label>
            <NewInput
              type="text"
              placeholder="00011122233"
              required
              {...register('cpf')}
              defaultValue={defaultValues?.cpf || ''}
            />
          </div>
        </div>

        <div className="two-inputs">
          <S.ContainerDatePicker>
            <S.Label>Data de nascimento</S.Label>
            {/* <NewInput
              placeholder="01/12/2000"
              required
              {...register('date_of_birth')}
              defaultValue={useFormattedDate(defaultValues.date_of_birth)}
            /> */}
            <S.DayPicker
              value={useFormattedDate(defaultValues.date_of_birth)}
              format="DD/MM/YYYY"
            />
          </S.ContainerDatePicker>
          <div>
            <S.Label>Contato</S.Label>
            <NewInput
              type="tel"
              placeholder="(88) 9 1122-3344"
              required
              {...register('phone')}
              defaultValue={defaultValues?.phone || ''}
            />
          </div>
          <div>
            <S.Label>Email</S.Label>
            <NewInput
              type="email"
              placeholder="fulano@tal.com"
              required
              {...register('email')}
              defaultValue={defaultValues?.email || ''}
            />
          </div>
        </div>

        <div className="two-inputs">
          {defaultValues.id === '' && (
            <>
              <div>
                <S.Label>Senha</S.Label>

                <NewInput type="password" required {...register('password')} />
              </div>
              <div>
                <S.Label>Confirmação de senha</S.Label>
                <NewInput
                  name="password_confirmation"
                  type="password"
                  required
                />
              </div>
            </>
          )}

          <div className="switch">
            <S.Label>Aluno ativo?</S.Label>

            <Controller
              name="active"
              control={control}
              defaultValue={defaultValues?.active}
              render={props => {
                return (
                  <NewSwitch
                    changeState={props.field.onChange}
                    isActive={props.field.value}
                  />
                );
              }}
            />
          </div>
        </div>

        <div>
          <div>
            <S.Label>Observações?</S.Label>
            <InputTextArea
              {...register('observation')}
              defaultValue={defaultValues?.observation || ''}
            />
          </div>
        </div>

        <S.Button heightSize="large" type="submit">
          {editUser.id === '' ? 'Cadastrar' : 'Atualizar'}
        </S.Button>
      </S.Form>
    </Modal>
  );
};

export default ModalAddStudent;
