import { axiosApi } from "./api";

export const getRegistrollamadas = async() => {

    const token = localStorage.getItem('token');

    const registrollamadasResp = axiosApi.get('/registrollamadas', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = registrollamadasResp;

    return data;   
}