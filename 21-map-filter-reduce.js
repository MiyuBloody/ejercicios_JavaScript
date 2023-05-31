/* 
1. Crea un array llamado calificaciones que contenga calificaciones numéricas (por ejemplo, 85, 90, 78, 92, 88).
2. Utiliza el método map para aumentar cada calificación en 5 puntos.
3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
4. Utiliza el método reduce para calcular la calificación promedio.
*/

const calificaciones = [85, 90, 78, 92, 88];
const calificacionesAumentadas = calificaciones.map(calificacion => calificacion + 5);
console.log(calificacionesAumentadas);
const calificacionesMoI = calificaciones.filter(calificacion => calificacion >= 90)
console.log(calificacionesMoI);
const calificacionesPromedio = calificaciones.reduce((suma, calificacion) => suma + calificacion, 0) / calificaciones.length;
console.log(calificacionesPromedio);