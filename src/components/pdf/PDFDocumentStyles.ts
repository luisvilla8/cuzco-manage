import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_company: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  header_company_image: {
    width: 45,
    height: 50
  },
  header_bill: {
    border: '1px solid #000000',
    borderRadius: 2,
    padding: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  header_company_text: {},
  header_company_name: {
    fontFamily: 'Helvetica-Bold',
  },
  header_company_address: {
    fontSize: 10,
    color: '#626262',
    paddingTop: 5,
  },
  header_company_tel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 2,
  },
  header_company_tel_label: {
    fontSize: 10,
    color: '#626262',
    width: 50,
  },
  header_company_tel_value: {
    fontSize: 10,
  },
  header_bill_name: {
    fontSize: 12,
    textAlign: 'center',
    color: '#626262',
  },
  header_bill_num: {
    fontSize: 14,
    textAlign: 'center',
    color: '#626262',
    paddingVertical: 2,
  },
  header_bill_ruc: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_bill_ruc_label: {
    fontSize: 10,
    color: '#626262',
  },
  header_bill_ruc_value: {
    fontSize: 10,
  },
  body: {
    fontSize: 14,
  },
  body_info: {
    marginTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #000000',
  },
  body_client: {},
  body_client_name: {
    fontSize: 12,
    paddingVertical: 4,
  },
  body_info_bill: {
    paddingTop: 38,
  },
  body_output_group: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 2,
  },
  body_output_group_label: {
    fontSize: 10,
    minWidth: 40,
    marginRight: 5,
    color: '#626262',
  },
  body_output_group_value: {
    fontSize: 10,
  },
  body_buy: {
    paddingTop: 20,
  },
  body_buy_table: {
    width: '100%',
  },
  body_buy_table_header: {
    flexDirection: 'row',
    paddingVertical: 2,
    marginBottom: 4,
  },
  body_buy_table_header_item: {
    fontSize: 10,
    color: '#626262',
    textAlign: 'center',
    paddingHorizontal: 6,
  },
  body_buy_table_body: {},
  body_buy_table_body_row: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  body_buy_table_body_item: {
    fontSize: 10,
    paddingVertical: 2,
    textAlign: 'center',
    paddingHorizontal: 6,
  }
})