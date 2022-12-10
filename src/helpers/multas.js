import { axiosApi } from "./api";

export const getMultas = async() => {

    const token = await localStorage.getItem('token');

    const multasResp = axiosApi.get('/multas', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = multasResp;

    return data;   
}