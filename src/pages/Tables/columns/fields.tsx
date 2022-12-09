import { columnClients, columnProducts, columnProviders, columnUsers } from "../../../constants";

export const getFieldsByTableName = (tableName = "") => {
  const newTableName = tableName.toLowerCase();
  return fields[newTableName];
};

export const fields = {
  productos: columnProducts,
  usuarios: columnUsers,
  clientes: columnClients,
  proveedores: columnProviders
};