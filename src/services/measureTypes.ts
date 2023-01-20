import { deleteRequest, getRequest, postRequest, putRequest } from "./request";

export const addMeasureType = (data: any) => {
  const endpoint = "products";
  return postRequest(endpoint, data);
}

export const getMeasureTypes = () => {
  const endpoint = "measure-types";
  return getRequest(endpoint);
}

export const updateMeasureType = (id: number, data: any) => {
  const endpoint = `products/${id}`;
  return putRequest(endpoint, data);
}

export const deleteMeasureType = (id: number) => {
  const endpoint = `products/${id}`;
  return deleteRequest(endpoint);
}