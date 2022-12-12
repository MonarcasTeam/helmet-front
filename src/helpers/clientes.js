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

export const getClientesByUser = async(id) => {
    try{
        const token = localStorage.getItem('token');
        const clientesResp = await axiosApi.get(`/clientes/user=${id}`, {
            'headers': {
                'Authorization': `Bearer ${token}` 
            }
        });
        console.log(clientesResp)
        const { data } = clientesResp;
        return {
            ok:true,
            data,
    }
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    } 
}

export const clienteCreate = async (userId) => {
    try {
        const token = localStorage.getItem("token");

        const clienteResp = await axiosApi.post(`/clientes/user=${userId}`, p, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const { data } = clienteResp;
        return {
            ok: true,
            data,
        }
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}