/* 
1. Crea un array llamado frutas que contenga tres frutas: "manzana", "plátano" 
y "naranja".
2. Agrega una fruta al final del array usando el método push.
3. Elimina la primera fruta del array usando el método shift.
4. Muestra en consola la longitud del array.
*/

const frutas = ["manzana", "platano", "naranja"]
frutas.push("fresa")
frutas.shift()
console.log(frutas.length)