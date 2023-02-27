import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import { FinalPrices } from '../../context/BillProvider';
import { BillProduct, Client } from '../../models';
import { numeroALetras } from '../../util';
import { TYPE_BOLETA } from '../../constants'
import { styles } from './PDFDocumentStyles';


type BillInfo = {
  client: Client
  products: BillProduct[]
  finalPrices: FinalPrices
  nBill: string
  type: "BOLETA" | "FACTURA"
}


export const PDFDocument = ({client, products, finalPrices, nBill, type}: BillInfo) => {

  const getMeasureNameById = (id: number) => {
    const measureTypes = [
      {
        created_at:"2023-01-20T05:12:44.000000Z",
        id:1,
        nombre:"Litro",
        prefijo:"lt",
        updated_at:"2023-01-20T05:12:44.000000Z"
      },
      {
        created_at:"2023-01-20T05:12:44.000000Z",
        id:2,
        nombre:"Kilogramo",
        prefijo:"kg",
        updated_at:"2023-01-20T05:12:44.000000Z"
      }
    ]

    const measureTypeFound = measureTypes.find(mt => mt.id === id)
    return measureTypeFound?.nombre;
  }

  return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.header_company}>
          <Image src="../../../../logo__black.jpg" style={styles.header_company_image}/>
          <View style={styles.header_company_text}>
            <Text style={styles.header_company_name}>AgroInversiones Cusco E.I.R.L.</Text>
            <Text style={styles.header_company_address}>Av. Los Libertadores Nro. 44 Cusco - Cusco - Santiago</Text>
            <View style={styles.header_company_tel}>
              <Text style={styles.header_company_tel_label}>Telefono</Text>
              <Text style={styles.header_company_tel_value}>945 016 818</Text>
            </View>
          </View>
        </View>
        <View style={styles.header_bill}>
          <Text style={styles.header_bill_name}>{type.toLowerCase().replace(/^./, type[0].toUpperCase())} Electrónica</Text>
          <Text style={styles.header_bill_num}>N° {nBill}</Text>
          <View style={styles.header_bill_ruc}>
            <Text style={styles.header_bill_ruc_label}>N° RUC</Text>
            <Text style={styles.header_bill_ruc_value}>20610006290</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.body_info}>
          <View style={styles.body_client}>
            <Text>Cliente</Text>
            <Text style={styles.body_client_name}>{ client.nombre }</Text>
            <View style={styles.body_output_group}>
              <Text style={styles.body_output_group_label}>Dirección</Text>
              <Text style={styles.body_output_group_value}>{ client.direccion }</Text>
            </View>
            <View style={styles.body_output_group}>
              <Text style={styles.body_output_group_label}>N° {type === TYPE_BOLETA ? "DNI" : "RUC"}</Text>
              <Text style={styles.body_output_group_value}>{ type === TYPE_BOLETA ? client.dni : client.ruc  }</Text>
            </View>
            <View style={styles.body_output_group}>
              <Text style={styles.body_output_group_label}>Telefono</Text>
              <Text style={styles.body_output_group_value}>{ client.telefono }</Text>
            </View>
            <View style={styles.body_output_group}>
              <Text style={styles.body_output_group_label}>Correo</Text>
              <Text style={styles.body_output_group_value}>{ client.email }</Text>
            </View>
          </View>
          <View style={styles.body_info_bill}>
            <View style={styles.body_output_group}>
              <Text style={styles.body_output_group_label}>Fecha de Emisión</Text>
              <Text style={styles.body_output_group_value}>{new Date().toLocaleDateString("en-US")}</Text>
            </View>
            <View style={styles.body_output_group}>
              <Text style={styles.body_output_group_label}>Tipo de moneda</Text>
              <Text style={styles.body_output_group_value}>Soles</Text>
            </View>
          </View>
        </View>
        <View style={styles.body_buy}>
          <View style={styles.body_buy_table}>
            <View style={styles.body_buy_table_header}>
              <Text style={[styles.body_buy_table_header_item,{ width: "15%" }]}>Cantidad</Text>
              <Text style={[styles.body_buy_table_header_item,{ width: "15%" }]}>Unidad</Text>
              <Text style={[styles.body_buy_table_header_item,{ width: "40%" }]}>Descripción</Text>
              <Text style={[styles.body_buy_table_header_item,{ width: "15%" }]}>Precio Unitario</Text>
              <Text style={[styles.body_buy_table_header_item,{ width: "15%" }]}>Importe</Text>
            </View>
            <View style={styles.body_buy_table_body}>
              {
                products.map( product => (
                  <View style={styles.body_buy_table_body_row} key={product.id}>
                    <Text style={[styles.body_buy_table_body_item,{ width: "15%" }]}>{product.cantidad}</Text>
                    <Text style={[styles.body_buy_table_body_item,{ width: "15%" }]}>{getMeasureNameById(product.id_tipo_medida)}</Text>
                    <Text style={[styles.body_buy_table_body_item,{ width: "40%", textAlign: "left" }]}>{product.descripcion}</Text>  
                    <Text style={[styles.body_buy_table_body_item,{ width: "15%" }]}>{product.precioUnitario}</Text>  
                    <Text style={[styles.body_buy_table_body_item,{ width: "15%" }]}>{product.importe}</Text>  
                  </View>
                ))
              }
              <View style={[styles.body_buy_table_body_row, {marginTop: 15}]}>
                <Text style={[styles.body_buy_table_body_item,{ width: "15%" }]}></Text>
                <Text style={[styles.body_buy_table_body_item,{ width: "15%" }]}></Text>
                <Text style={[styles.body_buy_table_body_item,{ width: "30%" }]}></Text>  
                <Text style={[styles.body_buy_table_body_item,{ width: "15%", textAlign: "left" }]}>Sub Total: </Text>  
                <Text style={[styles.body_buy_table_body_item,{ width: "21%", textAlign: "right"}]}>S/ {(finalPrices.subTotal).toFixed(2)}</Text>  
              </View>
              <View style={styles.body_buy_table_body_row}>
                <Text style={[styles.body_buy_table_body_item,{ width: "15%" }]}></Text>
                <Text style={[styles.body_buy_table_body_item,{ width: "15%" }]}></Text>
                <Text style={[styles.body_buy_table_body_item,{ width: "30%" }]}></Text>  
                <Text style={[styles.body_buy_table_body_item,{ width: "15%", textAlign: "left" }]}>I.G.V ({finalPrices.igv}%) : </Text>  
                <Text style={[styles.body_buy_table_body_item,{ width: "21%", textAlign: "right"}]}>S/ {(finalPrices.igv * finalPrices.subTotal / 100).toFixed(2)}</Text>  
              </View>
              <View style={styles.body_buy_table_body_row}>
                <Text style={[styles.body_buy_table_body_item,{ width: "15%" }]}></Text>
                <Text style={[styles.body_buy_table_body_item,{ width: "15%" }]}></Text>
                <Text style={[styles.body_buy_table_body_item,{ width: "30%" }]}></Text>  
                <Text style={[styles.body_buy_table_body_item,{ width: "15%", textAlign: "left" }]}>Importe Total : </Text>  
                <Text style={[styles.body_buy_table_body_item,{ width: "21%", textAlign: "right", fontFamily: "Helvetica-Bold", fontSize: 12}]}>S/ {(finalPrices.total).toFixed(2)}</Text>  
              </View>
            </View>
          </View>
          <View style={[styles.body_output_group, {marginTop: 20}]}>
            <Text style={styles.body_output_group_label}>Son :</Text>
            <Text style={styles.body_output_group_value}>{ numeroALetras((finalPrices.total).toFixed(2))}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)};