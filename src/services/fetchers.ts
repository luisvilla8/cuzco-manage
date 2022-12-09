import { addClients, deleteClient, getClients, updateClient } from "./clients";
import { addProducts, deleteProduct, getProducts, updateProduct } from "./product";
import { addProviders, deleteProvider, getProviders, updateProvider } from "./providers";
import { getUsers } from "./user";

export const fetchers = {
  productos: {
    add: addProducts,
    get: getProducts,
    update: updateProduct,
    delete: deleteProduct,
  },
  usuarios: {
    get: getUsers,
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
  }
}