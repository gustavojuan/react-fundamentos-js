// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad:45,
    clave:'Ironman',
    rango:'Capitán'
}

const retornaPersona = ({clave, edad, rango = 'Sin rango'}) => {       
    return {
        nombreClave:clave,
        anios:edad,
        latlng: {
            lat: 14.1232,
            lng: -10.6526
        }
    }
}

//const {nombreClave:akanombreClave, anios, latlng:{lat,lng}} = retornaPersona( persona );

const {nombreClave, anios, latlng} = retornaPersona( persona );
const {lat, lng} = latlng;
console.log(nombreClave , anios);
console.log(lat,lng);