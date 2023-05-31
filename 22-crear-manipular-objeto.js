/* 
1. Crea un objeto llamado persona con las propiedades nombre, apellido, edad y ciudad. 2. Cambia el valor de la propiedad ciudad a una nueva ciudad.
3. Agrega una propiedad ocupacion al objeto.
4. Muestra en consola todas las propiedades y sus valores usando un bucle for...in.
*/

let persona = {
    nombre: 'Mercedes',
    apellido: 'Gonzalez',
    edad: 25,
    ciudad:'Madrid'
}

persona.ciudad = 'Barcelona'
console.log(persona)

persona.ocupacion = 'barrendera'
console.log(persona)

let text = "";
for (let x in persona) {
  text += persona[x];
  console.log(persona[x])
}

