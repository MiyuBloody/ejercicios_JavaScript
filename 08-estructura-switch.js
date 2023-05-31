/* 
1. Crea una variable fruta y asígnale el nombre de una fruta.
2. Utiliza una estructura switch para determinar si la fruta es roja (manzana, fresa), amarilla (plátano, piña) o de otro color (naranja, uva) y muestra el resultado en consola.
*/

let fruta = "manzana";

switch (fruta) {
    case "manzana":
    case "fresa":
        console.log("La fruta es roja");
        break;
    case "plátano":
    case "piña":
        console.log("La fruta es amarilla");
        break;
    default:
        console.log("La fruta es de otro color");
        break;
}
