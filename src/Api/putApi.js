import axios from "axios";
import { setNewPassword } from "../redux/features/user/userSlice";

export const fetchPutUser = async (id, userEdited, dispatch) => {
    try {
        await axios.put(`http://localhost:4000/users/${id}`, userEdited);
        await dispatch(setNewPassword(userEdited));
    } catch (error) { console.log(error) }
}