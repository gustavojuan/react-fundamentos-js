const persona = {
  nombre: "Shane",
  apellido: "Gooseman",
  edad: 41,
  direccion: {
    calle: "Benissuai",
    numero: 28,
    ciudad: "Gandia",
    zip: 46700,
    lat: 14.3232,
    lng: 34.6969,
  },
};

//Asignación por referencia ¡OJO!
const persona2 = persona;
persona2.nombre = "Peter";

//Si quiero crear un clon lo hago con spread:
const persona3 = { ...persona };
persona3.nombre = "Tony";

console.log(persona);
console.log(persona2);
console.log(persona3);
