import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiCheckSquare } from 'react-icons/fi';
import api from '../../services/api';
import { InputTextArea } from '../InputTextArea';
import Modal from '../Modal';
import { NewInput } from '../NewInput';
import { NewSelect } from '../NewSelect';
import { Form, Label, Switch } from './styles';

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

type FormProps = StudentProps & { password_confirmation: string };

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  // handleAddStudent: (student: StudentProps) => Promise<void>;
}

const ModalAddStudent: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
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
        const response = await api.post('/users', student);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit(handle)}>
        <h1>Novo aluno</h1>

        <div className="two-inputs">
          <div>
            <Label>Nome do aluno</Label>
            <NewInput
              placeholder="Ex: Fulano de tal"
              required
              {...register('full_name')}
            />
          </div>
          <div>
            <Label>Tipo de plano</Label>
            <NewSelect values={plans} {...register('plan_type')} />
          </div>
        </div>

        <div className="two-inputs">
          <div>
            <Label>CPF</Label>
            <NewInput
              type="text"
              placeholder="00011122233"
              required
              {...register('cpf')}
            />
          </div>
          <div>
            <Label>Data de nascimento</Label>
            <NewInput
              type="date"
              placeholder="01/12/2000"
              required
              {...register('date_of_birth')}
            />
          </div>
        </div>

        <div className="two-inputs">
          <div>
            <Label>Contato</Label>
            <NewInput
              type="tel"
              placeholder="(88) 9 1122-3344"
              required
              {...register('phone')}
            />
          </div>
          <div>
            <Label>Email</Label>
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
            <Label>Senha</Label>

            <NewInput type="password" required {...register('password')} />
          </div>
          <div>
            <Label>Confirmação de senha</Label>
            <NewInput name="password_confirmation" type="password" required />
          </div>
        </div>

        <div>
          <div>
            <Label>Aluno ativo?</Label>
            <Switch onClick={() => setIsActive(!isActive)}>
              <input
                type="checkbox"
                checked={isActive}
                // onChange={() => console.log(!isActive)}
                {...register('active')}
              />
              <span className="slider round" />
            </Switch>
          </div>
        </div>

        <div>
          <div>
            <Label>Observações?</Label>
            <InputTextArea {...register('observation')} />
          </div>
        </div>

        <button type="submit" data-testid="add-student-button">
          <p className="text">Adicionar aluno</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddStudent;
