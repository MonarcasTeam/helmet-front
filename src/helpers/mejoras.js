import { axiosApi } from "./api";

export const getMejoras = async() => {

    const token = localStorage.getItem('token');

    const mejorasResp = await axiosApi.get('/mejoras', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const { data } = mejorasResp;

    return data;   
}