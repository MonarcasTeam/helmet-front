import { axiosApi } from "./api";

export const getDetallePago = async() => {

    const token = localStorage.getItem('token');

    const detallePagoResp = await axiosApi.get('/detallepago', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const { data } = detallePagoResp;

    return data;   
}