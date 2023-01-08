import axios from "axios";

const BASE_URL = "http://localhost:8080";

export function getWedServicesById(id) {
  console.log(id);
  return axios.get(`${BASE_URL}/getAllServices?id=${id}`);
}

export function getWedServicesByServiceId(id) {
  console.log(id);
return axios.get(`${BASE_URL}/getServiceById?sid=${id}`);
}

export function deleteWedServicesById(id) {
  console.log(id);
return axios.delete(`${BASE_URL}/deleteWedService/${id}`);
}

export function getWedServicesByCategory(category) {
  return axios.get(`${BASE_URL}/getService?category=${category}`);
}

export function getSpacificService(id) {
  console.log(id);
  return axios.get(`${BASE_URL}/getServiceById?sid=${id}`);
}

export function getWedServicesByLocation(location) {
  return axios.get(`${BASE_URL}/getServiceLocation?location=${location}`);
}

