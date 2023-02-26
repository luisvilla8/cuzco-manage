export type Client = {
  created_at: string
  direccion: string
  dni: string
  email: string
  id: number
  id_tipo_agente: number
  nombre: string
  ruc: string
  telefono: string
  updated_at: string
}

export const defaultClient:Client = {
  created_at: "",
  direccion: "",
  dni: "",
  email: "",
  id: 0,
  id_tipo_agente: 0,
  nombre: "",
  ruc: "",
  telefono: "",
  updated_at: ""
}