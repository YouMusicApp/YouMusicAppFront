import ModalLogin from '../Modals/ModalLogin/ModalLogin';
import ModalAside from '../Modals/ModalAside/ModalAside';
import { useSelector } from 'react-redux';
import { AvatarUser } from '../AvatarUser/AvatarUser';
import MediaQuery from 'react-responsive'
import LoginAuth0Button from '../Auth0/LoginAuthButton';
import AuthenticationButton from '../Auth0/AuthenticationButton';

export function Header() {
    const usersData = useSelector(state => state.userSlice);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div type="button" id="sidebarCollapse" className="">
                    <MediaQuery maxWidth={600} >
                        <ModalAside />
                    </MediaQuery>
                </div>
                {/* {usersData.isLogged ? <AvatarUser /> : <ModalLogin />} */}
                <AuthenticationButton />
            </div>
        </nav>
    );
}