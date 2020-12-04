import axios from "axios"
const instance = axios.create({
    baseURL: 'https://new-kanban12.herokuapp.com/'
});

export default instance