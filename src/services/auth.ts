import { getRequest, postRequest } from "./request";

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