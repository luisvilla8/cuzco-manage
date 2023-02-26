export type Product = {
  cantidad: number
  costo: number
  created_at: string
  descripcion: string
  id: number
  id_tipo_medida: number
  nombre: string
  precio: number
  updated_at: string
  url_imagen: string
};

export type BillProduct = {
  cantidad: number
  descripcion: string
  id: number
  id_tipo_medida: number
  nombre: string
  precioUnitario: number
  importe: number
};

export const defaultProduct = {
  cantidad: 0,
  costo: 0,
  created_at: "",
  descripcion: "",
  id: 0,
  id_tipo_medida: 0,
  nombre: "",
  precio: 0,
  updated_at: "",
  url_imagen: ""
}