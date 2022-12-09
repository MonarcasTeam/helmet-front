import { axiosApi } from "./api";

export const getRegistroinforme = async() => {

    const token = localStorage.getItem('token');

    const registroinformeResp = axiosApi.get('/registroinforme', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = registroinformeResp;

    return data;   
}