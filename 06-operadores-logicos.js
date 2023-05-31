/* 
1. Crea tres variables booleanas condicion1, condicion2 y condicion3 con diferentes valores.
2. Utiliza operadores lógicos (&&, ||, !) para combinar las condiciones y muestra los resultados en consola.
*/

let condicion1 = true;
let condicion2 = false;
let condicion3 = true;

console.log(condicion1 && condicion3) //true
console.log(condicion2 || condicion3) //true
console.log(!condicion3) //false
console.log(condicion1 && condicion2 || condicion3) //true