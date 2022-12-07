import Dropdown from 'react-bootstrap/Dropdown';
// import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch } from 'react-redux';
import { setUserLogOut } from '../../redux/features/user/userSlice';
import { setTrack } from '../../redux/features/player/playerSlice';
import { useNavigate } from 'react-router-dom';

export function AvatarUser() {
    const navigate = useNavigate();
    // const usersData = useSelector(state => state.userSlice)
    const logout = () => {
        dispatch(setUserLogOut());
        dispatch(setTrack(null))
    }

    const dispatch = useDispatch();
    return (
        <>
            <DropdownButton
                className='my-dropdown-toggle '
                drop=''
                variant=""
                title=<FaUserCircle className='icon' />
            >
                <Dropdown.Item eventKey="1" onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" onClick={() => logout()}>Log out</Dropdown.Item>
            </DropdownButton>
        </>

    );
}