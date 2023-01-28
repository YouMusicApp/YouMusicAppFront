import Dropdown from 'react-bootstrap/Dropdown';
// import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';
import LogoutAuthButton from '../Auth0/LogoutAuthButton';

export function AvatarUser() {
    const navigate = useNavigate();
    // const usersData = useSelector(state => state.userSlice)
    return (
        <>
            <DropdownButton
                className='my-dropdown-toggle'
                drop=''
                variant=""
                title=<FaUserCircle className='icon color-purple' />
            >
                <Dropdown.Item eventKey="1" onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" ><LogoutAuthButton /></Dropdown.Item>
            </DropdownButton>
        </>

    );
}