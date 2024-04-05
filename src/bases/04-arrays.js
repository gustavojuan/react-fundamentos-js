// Arreglos en JS

//const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let  arreglo2 = arreglo;
arreglo2.push( 5 )
let arreglo3 =  [...arreglo,6];

const arreglo4 = arreglo3.map(function(numero){
    return numero*2;
});

arreglo3.push(7);
console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
console.log( arreglo4 );