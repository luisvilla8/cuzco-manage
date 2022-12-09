import { deleteRequest, getRequest, putRequest } from "./request";

export const getUsers = () => {
  console.log("userrsssss")
  const endpoint = "users";
  return getRequest(endpoint);
}

export const updateUser = (id: number, data: any) => {
  const endpoint = `users/${id}`;
  return putRequest(endpoint, data);
}

export const deleteUser = (id: number) => {
  const endpoint = `users/${id}`;
  return deleteRequest(endpoint);
}