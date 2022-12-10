import { axiosApi } from "./api";

export const getPagoCliente = async() => {

    const token = localStorage.getItem('token');

    const pagoClienteResp = await axiosApi.get('/clientes', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const { data } = pagoClienteResp;

    return data;   
}