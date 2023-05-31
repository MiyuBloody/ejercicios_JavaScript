/* 
Escribe una función llamada crearMultiplicador que acepte un argumento factor. La función debe devolver otra función que acepte un número y devuelva el resultado de multiplicar ese número por el factor dado.
*/

function crearMultiplicador(factor) {
    return function(numero) {
      return numero * factor;
    };
  }
  const multiplicadorPor2 = crearMultiplicador(2);
  console.log(multiplicadorPor2(10));  