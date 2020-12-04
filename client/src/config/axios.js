import axios from "axios"
const instance = axios.create({
    baseURL: 'https://safe-hollows-76479.herokuapp.com'
});

export default instance