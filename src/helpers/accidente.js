import { axiosApi } from "./api";

export const getAccidente = async() => {

    const token = localStorage.getItem('token');

    const accidenteResp = await axiosApi.get('/accidente', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = accidenteResp;

    return data;   
}