import { isoStringToYYYYMMDD } from "../util";
import { Product as Product2 } from "../models"

type Product = {
  producto?: number;
  nombre: string;
  costo: number;
  cantidad: number;
  updated_at: string;
  descripcion: string;
  precio: number;
  url_imagen: string;
  tipoMedidaPrefijo: string;
  id: number;
}

export const adapterProduct = (product:Product) => {
  return {
    ...product,
    nombre: product.nombre,
    costo: product.costo,
    updated_at: isoStringToYYYYMMDD(product.updated_at),
    cantidad: product.cantidad,
  };
}

export const adapterFormToProduct = (product:Product) => {
  return {
    cantidad: product.cantidad,
    costo: product.costo,
    descripcion: product.descripcion,
    id_tipo_medida: Number(product.tipoMedidaPrefijo),
    nombre: product.nombre,
    precio: product.precio,
    url_imagen: product.url_imagen
  };
}

export const adapterProductToResult = ( product:Product2 ) => {
  const data = {
    topText: product.id,
    leftText: product.nombre,
    rightText: product.precio,
    id: product.id
  }
  return data
}

export const adapterProductToBillProduct = ( product:Product2, cantidadPedida: number ) => {
  const data = {
    cantidad: cantidadPedida,
    descripcion: product.descripcion,
    id: product.id,
    id_tipo_medida: product.id_tipo_medida,
    nombre: product.nombre,
    precioUnitario: product.precio,
    importe: product.precio * cantidadPedida
  }
  return data
}