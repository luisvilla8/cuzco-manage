import { deleteRequest, getRequest, putRequest } from "./request";

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