import { axiosApi } from "./api";

export const getMultas = async() => {

    const token =  localStorage.getItem('token');

    const multasResp = await axiosApi.get('/multas', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = multasResp;

    return data;   
}