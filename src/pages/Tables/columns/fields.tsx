import { columnClients, columnProducts, columnProviders, columnUsers } from "../../../constants";

export const getFieldsByTableName = (tableName = "") => {
  const someObj = {};
  const newTableName = tableName.toLowerCase();
  return fields[newTableName as keyof typeof someObj];
};

export const fields = {
  productos: columnProducts,
  usuarios: columnUsers,
  clientes: columnClients,
  proveedores: columnProviders
};