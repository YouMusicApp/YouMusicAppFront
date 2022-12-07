// axios
import axios from "axios";

export const fetchRegisterUsers = (registerUser) => {
    axios
        .post("http://localhost:4000/users", registerUser)
        .catch((error) => console.log(error));
};