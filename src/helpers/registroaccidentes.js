import { axiosApi } from "./api";

export const getRegistroaccidentes = async() => {

    const token = localStorage.getItem('token');

    const registroaccidentesResp = await axiosApi.get('/registroaccidentes', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = registroaccidentesResp;

    return data;   
}