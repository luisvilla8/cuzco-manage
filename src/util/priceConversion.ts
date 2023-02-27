const centavosFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const filterNum = (str = "") => {
  const numericalChar = new Set([".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  str = str.split("").filter(char => numericalChar.has(char)).join("");
  return str;
}

export function numeroALetras(cantidad: any) {
let numero = "0";
cantidad = filterNum(cantidad);
cantidad = parseFloat(cantidad);

if (cantidad == "0.00" || cantidad == "0") {
    return "CERO SOLES CON 00/100 CENTIMOS";
} else {        
    let ent = cantidad.toString().split(".");
    let arreglo = separar_split(ent[0]);
    let longitud = arreglo.length;

    switch (longitud) {
        case 1:
            numero = unidades(arreglo[0]);
            break;
        case 2:
            numero = decenas(arreglo[0], arreglo[1]);
            break;
        case 3:
            numero = centenas(arreglo[0], arreglo[1], arreglo[2]);
            break;
        case 4:
            numero = unidadesdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3]);
            break;
        case 5:
            numero = decenasdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4]);
            break;
        case 6:
            numero = centenasdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5]);
            break;
        case 7:
            numero = unidadesdemillon(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5], arreglo[6]);
            break;
        case 8:
            numero = decenasdemillon(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5], arreglo[6], arreglo[7]);
            break;
        case 9:
            numero = centenasdemillon(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5], arreglo[6], arreglo[7], arreglo[8]);
            break;
        default:
            numero = "_____________________________________________________________________ ";
            break;
    }

    ent = centavosFormatter.format(parseFloat(cantidad)).toString().split(".");
    ent[1] = isNaN(ent[1]) ? '00' : ent[1];

    if (numero == 'UN '){ 
      return "UN SOL CON " + ent[1] + "/100 CENTIMOS";
    }
    if (numero == 'UN MIL'){ 
      return "MIL SOLES CON " + ent[1] + "/100 CENTIMOS";
    }

    return numero + "SOLES CON " + ent[1] + "/100 CENTIMOS";
  }


function unidades(unidad: number) {
  let unidades = Array('UN ', 'DOS ', 'TRES ', 'CUATRO ', 'CINCO ', 'SEIS ', 'SIETE ', 'OCHO ', 'NUEVE ');


  return unidades[unidad - 1];
}

function decenas(decena = 0, unidad = 0) {
  let diez = Array('ONCE ', 'DOCE ', 'TRECE ', 'CATORCE ', 'QUINCE ', 'DIECISEIS ', 'DIECISIETE ', 'DIECIOCHO ', 'DIECINUEVE ');
  let decenas = Array('DIEZ ', 'VEINTE ', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA');
  let veinte

  if (decena == 0 && unidad == 0) {
      return "";
  }

  if (decena == 0 && unidad > 0) {
      return unidades(unidad);
  }

  if (decena == 1) {
      if (unidad == 0) {
          return decenas[decena - 1];
      } else {
          return diez[unidad - 1];
      }
  } else if (decena == 2) {
      if (unidad == 0) {
          return decenas[decena - 1];
      }
      else if (unidad == 1) {
          return veinte = "VEINTI" + "UN ";
      }
      else {
          return veinte = "VEINTI" + unidades(unidad);
      }
  } else {

      if (unidad == 0) {
          return decenas[decena - 1] + " ";
      }
      if (unidad == 1) {
          return decenas[decena - 1] + " Y " + "UN ";
      }

      return decenas[decena - 1] + " Y " + unidades(unidad);
  }
}

function centenas(centena = 0, decena = 0, unidad = 0) {
  let centenas = Array("CIENTO ", "DOSCIENTOS ", "TRESCIENTOS ", "CUATROCIENTOS ", "QUINIENTOS ", "SEISCIENTOS ", "SETECIENTOS ", "OCHOCIENTOS ", "NOVECIENTOS ");

  if (centena == 0 && decena == 0 && unidad == 0) {
      return "";
  }
  if (centena == 1 && decena == 0 && unidad == 0) {
      return "CIEN ";
  }

  if (centena == 0 && decena == 0 && unidad > 0) {
      return unidades(unidad);
  }

  if (decena == 0 && unidad == 0) {
      return centenas[centena - 1] + "";
  }

  if (decena == 0) {
      let numero = centenas[centena - 1] + "" + decenas(decena, unidad);
      return numero.replace(" Y ", " ");
  }
  if (centena == 0) {
      return decenas(decena, unidad);
  }

  return centenas[centena - 1] + "" + decenas(decena, unidad);

}

function unidadesdemillar(unimill = 0, centena = 0, decena = 0, unidad = 0) {
  let numero = unidades(unimill) + "MIL " + centenas(centena, decena, unidad);
  numero = numero.replace("UN MIL ", "MIL ");
  if (unidad == 0) {
      return numero.replace(" Y ", " ");
  } else {
      return numero;
  }
}

function decenasdemillar(decemill = 0, unimill = 0, centena = 0, decena = 0, unidad = 0) {
  let numero = decenas(decemill, unimill) + "MIL " + centenas(centena, decena, unidad);
  return numero;
}

function centenasdemillar(centenamill = 0, decemill = 0, unimill = 0, centena = 0, decena = 0, unidad = 0) {
  let numero = "0";
  numero = centenas(centenamill, decemill, unimill) + "MIL " + centenas(centena, decena, unidad);
  return numero;
}

function unidadesdemillon(unimillon = 0, centenamill = 0, decemill = 0, unimill = 0, centena = 0, decena = 0, unidad = 0) {
let centenasDeMillar = centenasdemillar(centenamill, decemill, unimill, centena, decena, unidad);
if (centenasDeMillar == "MIL ") {centenasDeMillar = "DE "};
if (unimillon == 1){
    let numero = unidades(unimillon) + "MILLON " + centenasDeMillar;
} else {
    let numero = unidades(unimillon) + "MILLONES " + centenasDeMillar;
}

if (unidad == 0) {  
return numero.replace(" Y ", " ");
} else {
return numero;
}
}

function decenasdemillon(decemillon = 0, unimillon = 0, centenamill = 0, decemill = 0, unimill = 0, centena = 0, decena = 0, unidad = 0) {
  let centenasDeMillar = centenasdemillar(centenamill, decemill, unimill, centena, decena, unidad);
  if (centenasDeMillar == "MIL ") { centenasDeMillar = "DE "};
  let numero = decenas(decemillon, unimillon) + "MILLONES " + centenasDeMillar;
  return numero;
}

function centenasdemillon(centenamillon = 0, decemillon = 0, unimillon = 0, centenamill = 0, decemill = 0, unimill = 0, centena = 0, decena = 0, unidad = 0) {
  let centenasDeMillar = centenasdemillar(centenamill, decemill, unimill, centena, decena, unidad);
  if (centenasDeMillar == "MIL ") { centenasDeMillar = "DE "};
  let numero = centenas(centenamillon, decemillon, unimillon) + "MILLONES " + centenasDeMillar;
  return numero;
}

function separar_split(texto = "") {
  let contenido = new Array();
  for (let i = 0; i < texto.length; i++) {
      contenido[i] = texto.substr(i, 1);
  }
  return contenido;
}

}