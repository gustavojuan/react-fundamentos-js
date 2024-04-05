const apiKey = 'iH9SRFBNRbCGt2ELy5coYUWcC4W0O4JL';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion
//     .then(resp=>{
//         resp.json().then(data=> {
//             console.log(data);
//         })
//     })
//     .catch(console.warn);


//Encadenar promesas
// peticion
//     .then(resp => resp.json())
//     .then(data=>console.log(data.data.images.original))
//     .catch(console.warn);

//los datas que queremos vienen en data.data.images.original asi que podemos desestructurar
peticion
    .then(resp => resp.json())
    .then(({data})=>{
        const {url} = data.images.original
        const img =document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);