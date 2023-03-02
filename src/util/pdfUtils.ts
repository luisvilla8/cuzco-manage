import ReactPDF from "@react-pdf/renderer";

export const getBlob = async (component: JSX.Element, fileName = "factura.pdf") => {
  const blob = await ReactPDF.pdf(component).toBlob()
  const url = URL.createObjectURL(blob)

  let a = document.createElement("a");
  a.setAttribute("download", fileName);
  a.setAttribute("href", url);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}