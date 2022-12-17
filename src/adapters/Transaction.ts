type Transaction = {
  agente?: number;
  items: [];
  montoPagado: number;
}

export const adapterTransactionToPost = (transaction:Transaction) => {
  return {
    id_agente: transaction.agente,
    monto_pagado: transaction.montoPagado,
    items: transaction.items.map( adapterItemToPost ),
  };
}

export const adapterItemToPost = (item:any) => {
  return {
    id_producto: item.producto,
    cantidad: item.cantidadPedida,
  };
}