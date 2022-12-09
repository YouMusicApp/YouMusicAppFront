import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { RxHamburgerMenu } from "react-icons/rx"
import { MainBtn } from '../../Buttons/MainBtn/MainBtn';
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from 'react-redux';
import { AvatarUser } from '../../AvatarUser/AvatarUser';
import ModalLogin from '../ModalLogin/ModalLogin';
import { SiYoutubemusic } from "react-icons/si";


const ModalAside = () => {
    const usersData = useSelector(state => state.userSlice);

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
                <Modal.Header className=''>
                    <IoIosArrowBack onClick={() => setShow(false)} className='cursor-pointer' />
                    <Modal.Title><SiYoutubemusic /> YouMusic</Modal.Title>
                    <div>{usersData.isLogged ? <AvatarUser /> : <ModalLogin />}</div>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <ul className="sidebar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalAside