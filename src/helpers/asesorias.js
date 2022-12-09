import { axiosApi } from "./api";

export const getAsesorias = async() => {

    const token = localStorage.getItem('token');

    const asesoriasResp = axiosApi.get('/asesorias', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = asesoriasResp;

    return data;   
}