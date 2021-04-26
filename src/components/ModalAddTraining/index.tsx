import Input from '../Input';
import Modal from '../Modal';
import { Label } from './styles';



interface TrainingProps {
    name: string;
    observation: string;
    note: string;
    expiration_date: string;
    user_id: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddStudent: (student: TrainingProps) => Promise<void>;
}

const ModalAddTraining: React.FC<IModalProps> = ({
    isOpen = false,
    setIsOpen,
    handleAddStudent
}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div>
                <Label>Nome do aluno</Label>
                <Input name="full_name" placeholder="Ex: Fulano de tal" required />
            </div>
        </Modal>
    )
}

export default ModalAddTraining;