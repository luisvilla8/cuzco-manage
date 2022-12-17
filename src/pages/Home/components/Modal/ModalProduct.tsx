import { type } from "os";
import { useState, useEffect } from "react";
import { adapterProduct } from "../../../../adapters/Product";
import { Button, Input } from "../../../../components";
import { getModalContext } from "../../../../context";
import { useFetch } from "../../../../hook";
import { getProducts } from "../../../../services";
import { Title } from "../../../../styled-components"

type Props = {
  handleAddProduct: (item: any) => void;
}

type Product = {
  producto?: number;
  nombre: string;
  costo: number;
  cantidad: number;
  updated_at: string;
  cantidadPedida?: number;
  costoFinal?: number;
}

export const ModalProduct = ({handleAddProduct}: Props) => {

  const [ data, setData ] = useState([])
  const [ form, setForm ] = useState<Product>({
    nombre: "",
    producto: 0,
    costo: 0,
    cantidad: 0,
    updated_at: "",
    cantidadPedida: 0,
    costoFinal: 0
  })
  const { callEndPoint } = useFetch();

  const handleDisabled = () => {
    console.log("add")
  }
  const handleAdd = () => {
    const { producto, cantidadPedida, costoFinal, costo, nombre, updated_at } = form;
    const productToAdd = {producto, cantidadPedida, costoFinal, costo, nombre, updated_at}
    console.log("productToAdd", productToAdd)
    handleAddProduct(productToAdd)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "producto") {
      const productFound = findProduct(Number(e.target.value))
      const { costo } = productFound;
      const cantidadPedida = 1;
      const costoFinal = costo * cantidadPedida;
      const producto = Number(e.target.value);
      return setForm({...form, producto, ...productFound, cantidadPedida, costoFinal})
    }
    if(e.target.name === "cantidadPedida") {
      const cantidadPedida = Number(e.target.value);
      const costoFinal = form.costo * cantidadPedida;
      return setForm({...form, cantidadPedida, costoFinal})
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const getProductsData = async () => {
    const response = await callEndPoint(getProducts())
    if (response.status === 200) {
      const { data } = response.data;
      const fomattedData = data.map((item: any) => adapterProduct(item));
      setData(fomattedData)
    }
  }

  const findProduct = (id: number):Product => {
    const defaultProduct = {
      costo: 0,
      cantidad: 0,
      updated_at: "",
      nombre: ""
    }
    const product = data.find((item: any) => item.id === id) || defaultProduct;
    return product;
  }

  useEffect(() => {
    getProductsData()
  }, [])

  return (
    <>
      <Title>Agregar Producto</Title>
      <Input name="producto" type="select" value={form.producto} id="producto" width="100%" handleChange={handleChange} selectOptions={data}>
        Producto
      </Input>
      <Input name="costo" type="text" value={form.costo} id="costo" width="29%" handleChange={handleDisabled}>
        Costo Actual
      </Input>
      <Input name="cantidad" type="text" value={form.cantidad} id="cantidad" width="29%" handleChange={handleDisabled}>
        Stock Actual
      </Input>
      <Input name="updated_at" type="text" value={form.updated_at} id="updated_at" width="29%" handleChange={handleDisabled}>
        Último registro
      </Input>
      <Input name="cantidadPedida" type="text" value={form.cantidadPedida} id="cantidadPedida" width="29%" handleChange={handleChange}>
        Cantidad
      </Input>
      <Input name="costoFinal" type="text" value={form.costoFinal} id="costoFinal" width="29%" handleChange={handleChange}>
        Costo Final
      </Input>
      <div>
        <Button type="confirm" onClick={handleAdd}>Agregar</Button>
      </div>
    </>
  )
}
