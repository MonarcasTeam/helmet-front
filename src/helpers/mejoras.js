import { axiosApi } from "./api";

export const getMejoras = async() => {

    const token = localStorage.getItem('token');

    const mejorasResp = axiosApi.get('/mejoras', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const { data } = mejorasResp;

    return data;   
}