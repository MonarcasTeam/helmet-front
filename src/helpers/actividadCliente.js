import { axiosApi } from "./api";

export const getActividadCliente = async() => {

    const token = localStorage.getItem('token');

    const actividadClienteResp = await axiosApi.get('/clientes', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const { data } = actividadClienteResp;

    return data;   
}