import { useEffect, useState } from "react"
import { useFetch } from "../../../../hook";
import { CardStyled } from "./ProductCard.styled"
import { getProducts } from "../../../../services/product";
import { Input } from "../../../../components";

export const ProductCard = () => {

  const [ products, setProducts ] = useState([]);
  const { callEndPoint } = useFetch();

  const handleGetProducts = async () => {
    const response = await callEndPoint(getProducts())
    if (response.status === 200) {
      const { data } = response.data;
      setProducts(data)
      console.log("data", data)
    }
  }

  const handleAdd = () => {
    console.log("add")
  }

  useEffect(() => {
    handleGetProducts()
  }, [])

  return (
    <CardStyled>
      <Input name="Producto" type="select" value={1} id="cliente" width="50%" handleChange={handleAdd} selectOptions={products}>
        Producto
      </Input>
    </CardStyled>
  )
}
