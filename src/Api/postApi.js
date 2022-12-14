import axios from "axios";
import { registerUser } from "../redux/features/user/userSlice";
import { v4 as uuidv4 } from 'uuid';


export const fetchPostUser = async (newUser, dispatch) => {
    try {
        await axios.post('http://localhost:4000/users', newUser);
        await dispatch(registerUser(newUser));
    } catch (error) { console.log(error) }
}

export const functionRegister = async (e, userData, dispatch, setShow, setError) => {
    const new_user = {
        id: uuidv4(),
        userData: {
            username: e.target.username.value,
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value
        },
        myplaylists:[],
        liked_tracks:[],
        liked_album:[],
        liked_artist:[],
        profilePicture:''
    }

    const interim_user = (userData.list).find(user => user.userData.email === new_user.userData.email);
    if (!interim_user) {
        setShow(false);
        await fetchPostUser(new_user, dispatch);
    } else {
        setError('Email already exist');
        setTimeout(() => {
            setError('')
        }, 5000)
    }
}