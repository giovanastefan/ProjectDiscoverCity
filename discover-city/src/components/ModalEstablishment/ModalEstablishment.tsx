import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Establishment } from '../../types/Establishment';

interface Props {
    isOpen?: boolean;
    handleClose: () => void;
    establishment?: Establishment;
}

export const ModalEstablishment = ({ isOpen, handleClose, establishment }: Props) => {
    return <div>
    <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{establishment?.name}</Modal.Title>    
        </Modal.Header>

        <Modal.Body>
            {establishment?.description}
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer> 
    </Modal>   
</div>
}
