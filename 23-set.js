/* 
1. Crea un Set llamado nombres y agrega tres nombres diferentes.
2. Agrega un nombre que ya esté en el Set y verifica que no se duplique.
3. Muestra en consola la cantidad de elementos en el Set.
*/
//creo variables
/* let mercedes = "Mercedes"
let sonia = "Sonia"
let aia = "Aia"
const nombres = new Set ();
nombres.add(mercedes);
nombres.add(sonia);
nombres.add(aia)
console.log(nombres)
const exist = nombres.has(mercedes);//estoy viendo que existe
console.log(exist)
console.log(nombres.size);//estoy viendo la cantidad de elementos */

let nombres = new Set(['Mercedes', 'Aia', 'Sonia']);
nombres.add('Mercedes');
console.log(nombres);
console.log(nombres.size);//estoy viendo la cantidad de elementos