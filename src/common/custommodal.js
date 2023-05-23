import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const CoustomModal = ({onClick,show,handleClose,ModalTitle}) => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={onClick}>
                Launch demo modal
            </Button>

            <Modal show={show} handleClose={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{ModalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default CoustomModal;