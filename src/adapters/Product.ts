import { isoStringToYYYYMMDD } from "../util";

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