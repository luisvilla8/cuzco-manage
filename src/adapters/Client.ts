import { Client } from "../models";

export const adapterClientToResult = ( client:Client ) => {
  const data = {
    topText: client.email,
    leftText: client.nombre,
    rightText: client.ruc,
    id: client.id
  }
  return data
}