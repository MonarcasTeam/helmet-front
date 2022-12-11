import { axiosApi } from "./api";

export const getClientes = async(id) => {
try{
    const token = localStorage.getItem('token');

    const clientesResp = await axiosApi.get(`/clientes/=${id}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    console.log(clientesResp)
    const { data } = clientesResp;

    return{
        ok: true,
     data
    }   
}catch(error){
    const errorMessage = error.message;
    return{
        ok: false,
        errorMessage,
    }
}
}