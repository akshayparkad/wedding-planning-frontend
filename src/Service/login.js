import axios from "axios";

const BASE_URL = "http://localhost:8080";

export function getUserData(email, type) {
  console.log(email);
  console.log(type);
  return axios.get(`${BASE_URL}/getUserData?email=${email}&type=${type}`);
}
