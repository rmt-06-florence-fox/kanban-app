import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://new-normal-kanban.herokuapp.com'
});

export default instance