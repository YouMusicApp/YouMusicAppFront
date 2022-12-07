import axios from "axios";

export const fetchLikeTrack = async (userEdited) => {
    try {
        const response = await axios.put(`http://localhost:4000/users/${userEdited.id}`, userEdited);
    } catch (error) {
        console.log(error)
    }
}