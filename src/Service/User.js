import axios from "axios";

const BASE_URL = "http://localhost:8080";

export function userData(data) {
  return axios.post(`${BASE_URL}/addUser`, data);
}

export function getSessionData() {
  return axios.get(`${BASE_URL}/getsession`);
}

export function getUser(id) { 
  return axios.get(`${BASE_URL}/getUser?id=${id}`)
}


