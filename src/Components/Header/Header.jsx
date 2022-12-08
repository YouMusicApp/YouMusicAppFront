import Navbar from 'react-bootstrap/Navbar';
import ModalLogin from '../Modals/ModalLogin/ModalLogin';
import ModalAside from '../Modals/ModalAside/ModalAside';
import { useSelector } from 'react-redux';
import { AvatarUser } from '../AvatarUser/AvatarUser';
import { SiYoutubemusic } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

export function Header() {
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();

    return (
        <Navbar className='shadow-sm bg-body header'>
            <Navbar.Brand className='ms-2'>
                <ModalAside />
            </Navbar.Brand>
            <Navbar.Collapse onClick={() => navigate('/')} className="justify-content-end cursor-pointer me-2">
                <SiYoutubemusic />&nbsp;YouMusic
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end me-2">
                {usersData.isLogged ? <AvatarUser /> : <ModalLogin />}
            </Navbar.Collapse>
        </Navbar>
    );
}