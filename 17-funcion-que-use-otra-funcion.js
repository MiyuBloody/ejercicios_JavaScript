/* 
Escribe una función llamada operacion que acepte tres argumentos: a, b y una función operador. La función operacion debe ejecutar la función operador con los argumentos a y b y devolver el resultado.
*/

function operacion(a, b, operador) {
    return operador(a, b);
  }
// Función operador para sumar
const suma = (a, b) => {
    return a + b;
  };
  
  console.log(operacion(15, 23, suma));

