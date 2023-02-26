import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { BillProduct, Client, defaultClient, Product } from "../models";

interface Props {
  children: ReactNode;
}

const defaultContext: BillContextType = {
  clients: [],
  saveClients: () => {},
  products: [],
  saveProducts: () => {},
  billProducts: [],
  saveProductToBill: () => {},
  billClient: defaultClient,
  saveClientToBill: () => {},
  saveBillProducts: () => {},
  finalPrices: {
    subTotal: 0,
    igv: 0,
    total: 0
  },
  saveBillIGV: () => {},
  saveFinalPrices: () => {}
}

export type FinalPrices = {
  subTotal: number
  igv: number
  total: number
}

type BillContextType = {
  clients: Client[] | []
  saveClients: (client: Client[]) => void  
  products: Product[] | []
  saveProducts: (products: Product[]) => void  
  billClient: Client
  saveClientToBill: (client: Client) => void  
  billProducts: BillProduct[] | []
  saveProductToBill: (billProduct: BillProduct) => void  
  saveBillProducts: (billProducts: BillProduct[]) => void
  finalPrices: FinalPrices
  saveBillIGV: (igv:number) => void
  saveFinalPrices: (finalPrices: FinalPrices) => void
}

const BillContext = createContext(defaultContext);
export const useBillContext = () => useContext(BillContext)

export const BillProvider = ({ children }: Props) => {

  const [clients, setClients] = useState<Client[] | []>([]);
  const [products, setProducts] = useState<Product[] | []>([]);

  const [billClient, setbillClient] = useState<Client>(defaultClient);
  const [billProducts, setBillProducts] = useState<BillProduct[] | []>([]);

  const [finalPrices, setFinalPrices] = useState({
    subTotal: 0,
    igv: 18,
    total: 0
  });

  const saveClients = ( clients:Client[] ) => setClients(clients)
  const saveProducts = ( products:Product[] ) => setProducts(products)
  const saveClientToBill = ( client:Client ) => setbillClient(client)
  const saveProductToBill = ( product:BillProduct) => setBillProducts([...billProducts, product])
  const saveBillProducts = ( newProducts:BillProduct[]) => setBillProducts([...newProducts])
  const saveBillIGV = (igv: number) => setFinalPrices({ ...finalPrices, igv})
  const saveFinalPrices = (payload: FinalPrices) => setFinalPrices(payload)

  const contextValue = { 
    clients, 
    saveClients, 
    products, 
    saveProducts, 
    saveProductToBill, 
    billClient, 
    saveClientToBill, 
    billProducts,
    saveBillProducts,
    finalPrices,
    saveBillIGV,
    saveFinalPrices
  }
  
  useEffect(() => {
    let newSubTotal = 0
    billProducts.forEach( product => newSubTotal += product.importe)
    const newFinalPrices = {
      ...finalPrices,
      subTotal: newSubTotal,
      total: (newSubTotal * finalPrices.igv / 100) + newSubTotal
    }
    setFinalPrices(newFinalPrices)
  }, [billProducts])

  return (
    <BillContext.Provider 
      value={ contextValue }
    >
      { children }
    </BillContext.Provider>
  )
}
