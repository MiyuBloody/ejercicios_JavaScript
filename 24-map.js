/* 
1. Crea un Map llamado capitales y agrega tres pares de países y sus capitales (por ejemplo, España - Madrid, Francia - París, Italia - Roma).
2. Agrega un nuevo par de país y capital al Map.
3. Muestra en consola la capital de un país en particular.
4. Utiliza un bucle for...of para iterar sobre el Map e imprimir cada par de país y capital.

*/

// Create a Map
const capitales = new Map([
    ["España", "Madrid"],
    ["Francia", "Paris"],
    ["Italia", "Roma"]
  ]);

  console.log(capitales.set("Holanda", "Amsterdam"));
  console.log(capitales.get("España"))
  
  for (const [pais, capital] of capitales){ 
    console.log(`${pais}: ${capital}`);
    }