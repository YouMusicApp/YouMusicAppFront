import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { RxHamburgerMenu } from "react-icons/rx"
import { MainBtn } from '../../Buttons/MainBtn/MainBtn';

const ModalAside = () => {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    function handleShow(v) {
        setFullscreen(v);
        setShow(true);
    }

    return (
        <>
            <MainBtn
                name={<RxHamburgerMenu />}
                openModal={handleShow}
                className='text-dark'
                variant='link'
            />

            <Modal className='p-0' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>YouMusic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>Buscador</li>
                        <li>Listen now </li>
                        <li>Browse</li>
                        <li>Radio</li>
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalAside