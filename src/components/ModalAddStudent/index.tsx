import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { FiCheckSquare } from 'react-icons/fi';

import Modal from '../Modal';
import Input from '../Input';

import { Form, Label, Select } from './styles';

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
  const formRef = useRef<FormHandles>(null);
  const selectStateElement = useRef<HTMLSelectElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [observation, setObservation] = useState('');
  const [planSelected, setPlanSelected] = useState('');

  const plans = [
    { label: 'Quinzenal', value: 'Quinzenal' },
    { label: 'Semestral', value: 'Semestral' },
    { label: 'Personal', value: 'Personal' },
  ];

  const handleSubmit = useCallback(
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
    },
    [handleAddStudent, isActive, observation, planSelected, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo aluno</h1>

        <div className="two-inputs">
          <div>
            <Label>Nome do aluno</Label>
            <Input name="full_name" placeholder="Ex: Fulano de tal" />
          </div>
          <div>
            <Label>Tipo de plano</Label>
            <Select
              ref={selectStateElement}
              options={plans}
              onChange={(optionSelected: { label: string; value: string }) => {
                setPlanSelected(optionSelected.value);
              }}
              isClearable
            />
          </div>
        </div>

        <div className="two-inputs">
          <div>
            <Label>CPF</Label>
            <Input name="cpf" type="number" placeholder="00011122233" />
          </div>
          <div>
            <Label>Data de nascimento</Label>
            <Input name="date_of_birth" type="date" placeholder="01/01/2000" />
          </div>
        </div>

        <div className="two-inputs">
          <div>
            <Label>Contato</Label>
            <Input name="phone" type="text" placeholder="+55 11 9 2233-4455" />
          </div>
          <div>
            <Label>Email</Label>
            <Input name="email" type="email" placeholder="01/01/2000" />
          </div>
        </div>

        <div className="two-inputs">
          <div>
            <Label>Senha</Label>
            <Input name="password" type="password" />
          </div>
          <div>
            <Label>Confirmação de senha</Label>
            <Input name="password_confirmation" type="password" />
          </div>
        </div>

        <div>
          <div>
            <Label>Aluno ativo?</Label>
            <input
              id="input-checkbox-is-active"
              name="active"
              type="checkbox"
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
            />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Label>Observações?</Label>
            <textarea
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
