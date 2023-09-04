import axios from "axios";

const BASE_URL = process.env.API_BASE_URL;

const getBardApi = (message) => axios.get(BASE_URL + "?ques=" + message);

export default getBardApi;
