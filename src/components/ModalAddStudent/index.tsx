import React, { useCallback, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import InputSelect from '../InputSelect';
import { InputTextArea } from '../InputTextArea';
import { NewInput } from '../NewInput';
import Modal from '../Modal';
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
  handleAddStudent: (student: StudentProps) => Promise<void>;
}

const ModalAddStudent: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  handleAddStudent,
}) => {
  const { register, handleSubmit } = useForm();

  const [isActive, setIsActive] = useState(false);
  const [observation, setObservation] = useState('');
  const [planSelected, setPlanSelected] = useState('');

  const plans = [
    { label: 'Quinzenal', value: 'Quinzenal' },
    { label: 'Semestral', value: 'Semestral' },
    { label: 'Personal', value: 'Personal' },
  ];

  const handleStudentSubmit = useCallback(
    async ({
      cpf,
      date_of_birth,
      email,
      photo,
      phone,
      full_name,
      last_acess,
      password,
    }: FormProps) => {
      handleAddStudent({
        active: isActive,
        cpf,
        date_of_birth,
        email,
        photo,
        phone,
        full_name,
        last_acess,
        password,
        plan_type: planSelected,
        observation,
      });

      setIsOpen();
      setIsActive(false);
    },
    [handleAddStudent, isActive, observation, planSelected, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit(handleStudentSubmit)}>
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
            <InputSelect
              options={plans}
              isClearable
              setPlanSelected={(value: string) => setPlanSelected(value)}
              required
              {...register('full_name')}
            />
          </div>
        </div>

        <div className="two-inputs">
          <div>
            <Label>CPF</Label>
            <NewInput
              name="cpf"
              type="text"
              placeholder="00011122233"
              required
            />
          </div>
          <div>
            <Label>Data de nascimento</Label>
            <NewInput
              name="date_of_birth"
              type="date"
              placeholder="01/12/2000"
              required
            />
          </div>
        </div>

        <div className="two-inputs">
          <div>
            <Label>Contato</Label>
            <NewInput
              name="phone"
              type="tel"
              placeholder="(88) 9 1122-3344"
              required
            />
          </div>
          <div>
            <Label>Email</Label>
            <NewInput
              name="email"
              type="email"
              placeholder="fulano@tal.com"
              required
            />
          </div>
        </div>

        <div className="two-inputs">
          <div>
            <Label>Senha</Label>
            <NewInput name="password" type="password" required />
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
                onChange={() => console.log(!isActive)}
              />
              <span className="slider round" />
            </Switch>
          </div>
        </div>

        <div>
          <div>
            <Label>Observações?</Label>
            <InputTextArea
              name="observation"
              value={observation}
              onChange={e => setObservation(e.target.value)}
            />
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
