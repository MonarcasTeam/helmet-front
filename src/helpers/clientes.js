import { axiosApi } from "./api";

export const getClientes = async() => {

    const token = localStorage.getItem('token');

    const clientesResp = await axiosApi.get('/clientes', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = clientesResp;

    return data;   
}