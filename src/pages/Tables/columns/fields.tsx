import { columnClients, columnProducts, columnProviders, columnUsers } from "../../../constants";
import { columnPurchases } from "../../../constants/fields/purchase";
import { columnSales } from "../../../constants/fields/sale";

export const getFieldsByTableName = (tableName = "") => {
  const someObj = {};
  const newTableName = tableName.toLowerCase();
  return fields[newTableName as keyof typeof someObj];
};

export const fields = {
  productos: columnProducts,
  usuarios: columnUsers,
  clientes: columnClients,
  proveedores: columnProviders,
  ventas: columnSales,
  compras: columnPurchases
};