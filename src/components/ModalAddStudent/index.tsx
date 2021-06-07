import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiUserPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { InputTextArea } from '../InputTextArea';
import Modal from '../Modal';
import { LogoAndTitleModal } from '../ModalAddPlan/styles';
import { NewInput } from '../NewInput';
import { NewSelect } from '../NewSelect';
import * as S from './styles';

interface StudentProps {
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

// type FormProps = StudentProps & { password_confirmation: string };

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  updateStudents(): void;
}

const ModalAddStudent: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  updateStudents,
  // handleAddStudent,
}) => {
  const { register, handleSubmit } = useForm();

  const [isActive, setIsActive] = useState(false);

  function handle(data: StudentProps): void {
    const currentDate = String(new Date(Date.now()));

    const newData = { ...data, last_acess: currentDate };

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
        await api.post('/users', student);

        updateStudents();
        toast.success('Aluno cadastrado com sucesso!');
      } catch (error) {
        toast.error(
          'Ocorreu um erro ao cadastrar um aluno, tente novamente mais tarde!',
        );
      }
    },
    [],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} typeModal="large">
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
            />
          </div>
          <div>
            <S.Label>Tipo de plano</S.Label>
            <NewSelect values={plans} {...register('plan_type')} />
          </div>
          <div>
            <S.Label>CPF</S.Label>
            <NewInput
              type="text"
              placeholder="00011122233"
              required
              {...register('cpf')}
            />
          </div>
        </div>

        <div className="two-inputs">
          <div>
            <S.Label>Data de nascimento</S.Label>
            <NewInput
              type="date"
              placeholder="01/12/2000"
              required
              {...register('date_of_birth')}
            />
          </div>
          <div>
            <S.Label>Contato</S.Label>
            <NewInput
              type="tel"
              placeholder="(88) 9 1122-3344"
              required
              {...register('phone')}
            />
          </div>
          <div>
            <S.Label>Email</S.Label>
            <NewInput
              type="email"
              placeholder="fulano@tal.com"
              required
              {...register('email')}
            />
          </div>
        </div>

        <div className="two-inputs">
          <div>
            <S.Label>Senha</S.Label>

            <NewInput type="password" required {...register('password')} />
          </div>
          <div>
            <S.Label>Confirmação de senha</S.Label>
            <NewInput name="password_confirmation" type="password" required />
          </div>
          <div className="switch">
            <S.Label>Aluno ativo?</S.Label>
            <S.ContainerSwitch>
              <S.Switch onClick={() => setIsActive(!isActive)}>
                <input
                  type="checkbox"
                  checked={isActive}
                  // onChange={() => console.log(!isActive)}
                  {...register('active')}
                />
                <span className="slider round" />
              </S.Switch>
            </S.ContainerSwitch>
          </div>
        </div>

        <div>
          <div>
            <S.Label>Observações?</S.Label>
            <InputTextArea {...register('observation')} />
          </div>
        </div>

        <S.Button heightSize="large" type="submit">
          Cadastrar
        </S.Button>

        {/* <button type="submit" data-testid="add-student-button">
          <p className="text">Adicionar aluno</p>
          <div className="icon">
            <FiUserPlus size={24} />
          </div>
        </button> */}
      </S.Form>
    </Modal>
  );
};

export default ModalAddStudent;
