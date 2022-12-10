import { axiosApi } from "./api";

export const getMejoras = async() => {

    const token = localStorage.getItem('token');
// await
    const mejorasResp = await axiosApi.get('/mejoras', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const { data } = mejorasResp;

    return data;   
}