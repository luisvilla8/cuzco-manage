import { deleteRequest, getRequest, postRequest, putRequest } from "./request";

export const addClients = (data: any) => {
  const endpoint = "agents?type=1";
  const newData = {...data, id_tipo_agente: 1};
  return postRequest(endpoint, newData);
}

export const getClients = () => {
  const endpoint = "agents?type=1";
  return getRequest(endpoint);
}

export const updateClient = (id: number, data: any) => {
  const endpoint = `agents/${id}`;
  return putRequest(endpoint, data);
}

export const deleteClient = (id: number) => {
  const endpoint = `agents/${id}`;
  return deleteRequest(endpoint);
}