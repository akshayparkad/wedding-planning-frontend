import axios from "axios";

const BASE_URL = "http://localhost:8080";

export function userData(data) {
  console.log(data);
  return axios.post(`${BASE_URL}/addUser`, data);
}

export function getSessionData() {
  return axios.get(`${BASE_URL}/getsession`);
}

export function getUser(id) { 
  return axios.get(`${BASE_URL}/getUser?id=${id}`)
}

export function getDestroySession() {
  return axios.get(`${BASE_URL}/destroysession`);
}

export function addOrder(order) { 
  return axios.post(`${BASE_URL}/addOrder`,order)
}

export function getOrderByUid(uid)
{ 
  return axios.get(`${BASE_URL}/order/${uid}`)
}

export function cancleOrder(id) { 
  return axios.delete(`${BASE_URL}/order/${id}`);
}
