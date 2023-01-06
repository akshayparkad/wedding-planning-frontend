import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export function postWedServiceDetails(data){
    console.log(data);
    return axios.post(`${BASE_URL}/addService`, data)
}
