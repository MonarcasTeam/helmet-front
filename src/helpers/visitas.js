import { axiosApi } from "./api";

export const getVisitas = async() => {

    const token = localStorage.getItem('token');

    const visitasResp = axiosApi.get('/visitas', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = visitasResp;

    return data;   
}