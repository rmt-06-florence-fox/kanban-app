import axios from "axios";

const instance = axios.create({
  baseURL: "https://kanban-jar3030.herokuapp.com",
});
export default instance;
