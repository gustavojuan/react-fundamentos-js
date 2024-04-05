// Sin Async
// const getImagenPromesa = () =>
//   new Promise((resolve) => resolve("https://google.com"));

// getImagenPromesa().then(console.log);

// //Con Async
// const getImagen = async() => {
//   return "https://google.com";
// };

// getImagen().then(console.log)


//Con Async y Await podemos trabajar todo el código como si fuear síncrono

const getImagen = async () => {


    try {
        const apiKey = 'iH9SRFBNRbCGt2ELy5coYUWcC4W0O4JL';

        //con await le decimos "Espera a que esta promesa termine antes de ejecutar la siguiente línea"
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data}  = await resp.json();
        const {url} = data.images.original;    
    
        const img =document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.warn(error)
    }
   
};
  
getImagen()



  
// const apiKey = 'iH9SRFBNRbCGt2ELy5coYUWcC4W0O4JL';
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion
//     .then(resp => resp.json())
//     .then(({data})=>{
//         const {url} = data.images.original
//         const img =document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn);