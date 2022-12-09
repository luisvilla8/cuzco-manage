import { deleteRequest, getRequest, postRequest, putRequest } from "./request";

export const addProviders = (data: any) => {
  const endpoint = "agents";
  const newData = {...data, id_tipo_agente: 2};
  return postRequest(endpoint, newData);
}

export const getProviders = () => {
  const endpoint = "agents?type=2";
  return getRequest(endpoint);
}

export const updateProvider = (id: number, data: any) => {
  const endpoint = `agents/${id}`;
  return putRequest(endpoint, data);
}

export const deleteProvider = (id: number) => {
  const endpoint = `agents/${id}`;
  return deleteRequest(endpoint);
}