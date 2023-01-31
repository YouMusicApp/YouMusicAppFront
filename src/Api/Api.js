// axios
import axios from "axios";
import { setUserLogged } from "../redux/features/user/userSlice";



export const fetchGet = async (dispatch, route, setList) => {
    try {
        const resp = await axios.get(`http://localhost:4000/api/${route}/`);
        await dispatch(setList(resp.data.info));
    } catch (error) {
        console.log(error);
    }
}


export const functionLogin = (e, userData, dispatch) => {
    const new_user = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    // auth new_user
    const interim_user = (userData.list).find(user => user.userData.email === new_user.email)
    if (interim_user && interim_user.userData.password === new_user.password) {
        dispatch(setUserLogged(interim_user));

    } else { alert("Incorrect Password"); }
}