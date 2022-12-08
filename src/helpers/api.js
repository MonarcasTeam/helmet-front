import axios from "axios";

const api = 'localhost';

export const axiosAuth = axios.create({
    baseURL: `http://${api}:9090/auth`,
    mode: 'no-cors',
    cache: 'default'
});
export const axiosApi = axios.create({
    baseURL: `http://${api}:9090/api`,
    mode: 'no-cors',
    cache: 'default'
});