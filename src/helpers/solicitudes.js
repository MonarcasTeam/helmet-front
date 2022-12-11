import { axiosApi } from "./api";

export const getSolicitudes = async() => {

    const token = localStorage.getItem('token');

    const solicitudesResp =  await axiosApi.get('/solicitudes', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const { data } = solicitudesResp;

    return data;
}