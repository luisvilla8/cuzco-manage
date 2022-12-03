import axios from "axios";
import { loadAbort } from "../util";
import { baseURL, getHeaders } from "./config";

export const postRequest = (endpoint: string, data = {}) => {
  const headers = getHeaders();
  const controller = loadAbort();
  return {
    call: axios.post(`${baseURL}${endpoint}`, { ...data }, { signal: controller.signal, headers }),
    controller
  }
}
export const getRequest = (endpoint: string) => {
  const headers = getHeaders();
  const controller = loadAbort();
  return {
    call: axios.get(`${baseURL}${endpoint}`, { signal: controller.signal, headers }),
    controller
  }
}
export const putRequest = (endpoint: string, data = {}) => {
  const headers = getHeaders();
  const controller = loadAbort();
  return {
    call: axios.put(`${baseURL}${endpoint}`, { ...data }, { signal: controller.signal, headers }),
    controller
  }
}
export const deleteRequest = (endpoint: string) => {
  const headers = getHeaders();
  const controller = loadAbort();
  return {
    call: axios.delete(`${baseURL}${endpoint}`, { signal: controller.signal, headers }),
    controller
  }
}