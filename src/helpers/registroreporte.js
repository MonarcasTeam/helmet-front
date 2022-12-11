import { axiosApi } from "./api";

export const getRegistroreporte = async() => {

    const token = localStorage.getItem('token');

    const registroreporteResp = await  axiosApi.get('/registroreporte', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = registroreporteResp;

    return data;   
}