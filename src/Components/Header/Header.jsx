import ModalLogin from '../Modals/ModalLogin/ModalLogin';
import ModalAside from '../Modals/ModalAside/ModalAside';
import { useSelector } from 'react-redux';
import { AvatarUser } from '../AvatarUser/AvatarUser';
import { SiYoutubemusic } from "react-icons/si";
import MediaQuery from 'react-responsive'

export function Header() {
    const usersData = useSelector(state => state.userSlice);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div type="button" id="sidebarCollapse" className="">
                    <MediaQuery maxWidth={600} >
                        <ModalAside />
                    </MediaQuery>
                    <MediaQuery minWidth={250} >
                        <SiYoutubemusic /> YouMusic
                    </MediaQuery>
                </div>
                {usersData.isLogged ? <AvatarUser /> : <ModalLogin />}
            </div>
        </nav>
    );
}