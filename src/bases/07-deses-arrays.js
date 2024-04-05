const personajes = ['Abuelo','Padre','Hijo'];
const [ , , p3] = personajes;
console.log(p3);


const retornaArreglo = () => {
    return ['ABC',123];
}

const [ letras, numeros] = retornaArreglo();
console.table(letras, numeros);

//Tarea
//1. Primer valor del arreglo se llamará nombre
//2. Segundo  se llamará setNombre
const usarEstado = (valor) => {
    return [valor, ()=>{console.log('hola Mundo');}];
}
const [ nombre, setNombre ] = usarEstado('Goku');
console.log( nombre );
setNombre();



