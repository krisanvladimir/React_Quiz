import axios from "axios";

export default axios.create({
    baseURL: 'https://quiz-624b6-default-rtdb.firebaseio.com/'
})