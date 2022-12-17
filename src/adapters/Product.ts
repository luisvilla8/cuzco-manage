import { isoStringToYYYYMMDD } from "../util";

type Product = {
  producto?: number;
  nombre: string;
  costo: number;
  cantidad: number;
  updated_at: string;
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