const nombre = "Shane";
const apellido = "Gooseman";

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`
const saludo  = `Hola ${nombre} ${apellido}`
console.log(nombreCompleto,saludo);


function getSaludo (nombre) {
    return `Hola ${nombre}`;
}


console.log(`Este es un texto ${ getSaludo(nombre) } `)