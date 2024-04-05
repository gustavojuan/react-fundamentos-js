//Funciones

// function saludar(nombre ){
//     return `Hola, ${nombre}`;
// }

const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola de flecha, ${nombre}`;
};

const saludar3 = (nombre) => `Hola de flecha corta, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar("Shane"));
console.log(saludar2("Shane"));
console.log(saludar3("Shane"));
console.log(saludar4());

const getUser = () => ({
  uid: "001",
  username: "gooseman83",
});

const user = getUser();
console.log(user);

//Tarea
// function getUsuarioActivo(nombre) {
//   return {
//     uid: "002",
//     username: nombre,
//   }
// }

const getUsuarioActivo = (nombre) => ({
  uid: "002",
  username: nombre,
});

console.table(getUsuarioActivo("Shane"));
