import axios from "axios";
import { loadAbort } from "../util";
import { baseURL, headers } from "./config";

export const authUser = (data = {}) => {
  const endpoint = "login";
  return postRequest(endpoint, data);
}

export const logoutUser = () => {
  const endpoint = "logout";
  return getRequest(endpoint);
}

export const registerUser = (data = {}) => {
  const endpoint = "register";
  return postRequest(endpoint, data);
}

export const postRequest = (endpoint: string, data = {}) => {
  const controller = loadAbort();
  return {
    call: axios.post(`${baseURL}${endpoint}`, { ...data }, { signal: controller.signal, headers }),
    controller
  }
}
export const getRequest = (endpoint: string) => {
  const controller = loadAbort();
  return {
    call: axios.get(`${baseURL}${endpoint}`, { signal: controller.signal, headers }),
    controller
  }
}