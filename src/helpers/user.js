import { axiosApi } from "./api";

export const getUser = async() => {

    const token = localStorage.getItem('token');

    const userResp = await axiosApi.get('/user', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const { data } = userResp;

    return data;   
}