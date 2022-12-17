import { deleteRequest, getRequest, postRequest, putRequest } from "./request";

export const addSale = (data: any) => {
  const endpoint = "transactions";
  const newData = data;
  return postRequest(endpoint, newData);
}

// export const getSales = () => {
//   const endpoint = "transactions?type=2";
//   return getRequest(endpoint);
// }

// export const updateProvider = (id: number, data: any) => {
//   const endpoint = `agents/${id}`;
//   return putRequest(endpoint, data);
// }

// export const deleteProvider = (id: number) => {
//   const endpoint = `agents/${id}`;
//   return deleteRequest(endpoint);
// }