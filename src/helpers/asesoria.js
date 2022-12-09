import { axiosApi } from "./api";

export const getAsesoria = async() => {

    const token = localStorage.getItem('token');

    const asesoriaResp = axiosApi.get('/asesoria', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = asesoriaResp;

    return data;   
}