import { addClients, deleteClient, getClients, updateClient } from "./clients";
import { getMeasureTypes } from "./measureTypes";
import { addProducts, deleteProduct, getProducts, updateProduct } from "./product";
import { addProviders, deleteProvider, getProviders, updateProvider } from "./providers";
import { addPurchase, getPurchases } from "./purchase";
import { getSales, addSale } from "./sales";
import { deleteUser, getUsers, updateUser } from "./user";

export const fetchers = {
  productos: {
    add: addProducts,
    get: getProducts,
    update: updateProduct,
    delete: deleteProduct,
  },
  usuarios: {
    get: getUsers,
    update: updateUser,
    delete: deleteUser,
  },
  clientes: {
    add: addClients,
    get: getClients,
    update: updateClient,
    delete: deleteClient,
  },
  proveedores: {
    add: addProviders,
    get: getProviders,
    update: updateProvider,
    delete: deleteProvider,
  },
  ventas: {
    add: addSale,
    get: getSales
  },
  compras: {
    add: addPurchase,
    get: getPurchases
  },
  tiposMedida: {
    get: getMeasureTypes,
  }
}