import { deleteRequest, getRequest, postRequest, putRequest } from "./request";

export const addProducts = (data: any) => {
  const endpoint = "products";
  return postRequest(endpoint, data);
}

export const getProducts = () => {
  const endpoint = "products";
  return getRequest(endpoint);
}

export const updateProduct = (id: number, data: any) => {
  const endpoint = `products/${id}`;
  return putRequest(endpoint, data);
}

export const deleteProduct = (id: number) => {
  const endpoint = `products/${id}`;
  return deleteRequest(endpoint);
}