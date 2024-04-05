// Son asíncronas
//callback (resolve, reject)

import { getHeroeById } from "./bases/08-imp-exp";

//resolve() le dice a quien esté escuchando que la promesa ha finalizado

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     //reject('No se puedo encontrar el héroe');
//   }, 3000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Then de la promesa", heroe);
//   })
//   .catch(err=> console.warn(err));

// Primero se ejecuta el código síncrono
// Las promesas se guadan en un lugar especial de la pila de tareas

//Quiero pasar parametros a una promesa
const getHeroeByIdAsync = (id, time = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);      
      heroe ? resolve(heroe) : reject(new Error('Héroe no encontrado'));            
    }, time);
  });  
};

getHeroeByIdAsync(1111)
  .then(console.log)
  .catch(console.warn);


//   .then(heroe => console.log("Then de la funcion asyncrona", heroe))
  //   .catch((err) => console.warn(err));
