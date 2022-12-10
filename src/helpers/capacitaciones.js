import { axiosApi } from "./api";

export const getCapacitaciones = async() => {

    const token = localStorage.getItem('token');

    const capacitacionesResp = await axiosApi.get('/capacitaciones', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = capacitacionesResp;

    return data;   
}