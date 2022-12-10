import { axiosApi } from "./api";

export const getPagoCliente = async() => {

    const token = localStorage.getItem('token');

    const pagoClienteResp = axiosApi.get('/pagoCliente', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const { data } = pagoClienteResp;

    return data;   
}