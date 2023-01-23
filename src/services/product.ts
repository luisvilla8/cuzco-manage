import { adapterFormToProduct } from "../adapters/Product";
import { deleteRequest, getRequest, postRequest, putRequest } from "./request";

export const addProducts = (data: any) => {
  const endpoint = "products";
  const adaptedData = adapterFormToProduct(data)
  return postRequest(endpoint, adaptedData);
}

export const getProducts = () => {
  const endpoint = "products";
  return getRequest(endpoint);
}

export const updateProduct = (id: number, data: any) => {
  const endpoint = `products/${id}`;
  const adaptedData = adapterFormToProduct(data)
  return putRequest(endpoint, adaptedData);
}

export const deleteProduct = (id: number) => {
  const endpoint = `products/${id}`;
  return deleteRequest(endpoint);
}