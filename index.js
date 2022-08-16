// AJAX Es ASYNCHRONOUS JAVASCRIPT AND XML (JavaScript y xml asíncrono) ---> nace como respuesta a la necesidad de pedir recursos sin actualizar

// 1) navegador hace la request ---> 2) servidor la recibe ---> 3) servidor devuelve respuesta

// EXTENSIBLE MARKUP LANGUAGE ---> simplifica el intercambio de datos a través de internet entre sistemas incompatibles

// FETCH ---> método para hacer peticiones o enviar información a una base de datos
// fetch es asíncrono
// fetch es una promesa
// exige: 1 url
// option: parámetros opcionales que pueden ser un método o los encabezados de nuestra petición
//SE PUEDEN HACER CON COMILLAS SIMPLES, DOBLES Y BACKSTICKS

// MÉTODO GET
// MÉTODO DE PETICIÓN A UNA BASE DE DATOS
// PERCIBIMOS INFORMACIÓN COMO RESPUESTA

// SI NOSOTROS NO AGREGAMOS OPCIONES AL FETCH, EL MÉTODO POR DEFECTO ES GET

fetch("https://rickandmortyapi.com/api/character")
.then(respuesta => respuesta.json())
.then( data => {
    console.log(data)
})
.catch( () => {
    console.log("malio sal")
})

fetch("https://rickandmortyapi.com/api/episode")
.then( respuesta => respuesta.json())
.then( data => {
    console.log(data)
})
.catch( () => {
    console.log("malio sal")
})

console.log("después 1")
console.log("después 2")

// endpoint: una forma estructurada de organizar la información por la cual se está haciendo peticiones
// ejemplo de endpoints: https://rickandmortyapi.com/api/episode y https://rickandmortyapi.com/api/character 
// episode y character son endpoints, la api estructura su información en diferentes apartados, para otorgarle un orden coherente a la data que manejan

// PASO A PASO DE CÓMO HACER UNA PETICIÓN HTTP

// 1) buscar la api en google
// 2) acceder a la web oficial de esa api
// 3) leer la documentación de la api
// 4) extraer las url necesarias de nuestro interés
// 5) hacer el fetch con la url y el método correspondiente
// 6) verificar el status code de respuesta

//POST

// POST ME PERMITE ENVIAR INFORMACIÓN A UNA BASE DE DATOS
// precisa de que se aclare el método, se agregue el body y el headers
// esta información se detalla en el body del fetch
// SI OBTENEMOS UNA RESPUESTA AVISÁNDONOS QUE LLEGO ESA INFORMACIÓN Y SE INCORPORÓ EN LA BASE DE DATOS

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "Clase 15: AJAX Y FETCH",
        body: "Está media complicada la petición",
        userId: 540
    }),
    headers: {
        "Content-Type":"application/json"
    }
})
.then(res => res.json())
.then(data => {
    console.log(data)
})
.catch( () => {
    console.log("malio sal")
})

// PUT(MODIFICA TODO EL ELEMENTO QUE LLAMEMOS DE LA BASE DE DATOS) y PATCH(MODIFICA SOLO UN RASGO, EL QUE DESEEMOS, DE LO QUE EXISTA EN LA BASE DE DATOS)

// modifica un recurso específico
// modifica información preexistente en la base de datos

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
        id: 1,
        title: "Hola mundo",
        body: "Estamos practicando método put",
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
})

// DELETE
// es un método que borra un registro de una base de datos
// este método solo precisa que se aclare el method

fetch ("https://jsonplaceholder.typicode.com/posts/4", {
    method: "DELETE",
})
.then(res => res.json())
.then(data => console.log(data))

// PARÁMETROS

// LOS URL PARAMS SON PARÁMETROS QUE PERMITEN ENVIAR INFORMACIÓN EN FORMA DE SEGMENTOS DE LA URL

const form = document.querySelector("form")
const personaje = document.querySelector("#personaje")

form.onsubmit = (e) => {
    e.preventDefault()

    fetch(`https://rickandmortyapi.com/api/character/${personaje.value}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

// query params

// permite adjuntar parámetros en la forma clave-valor

// google.com/search?
// 1) el signo de pregunta indica el final de la url y el comienzo de los query parameters
// 2) los query parameters están definidos por el soporte backend de la api
// 3) los query parameters filtran la información en base a nuestras necesidades
// 4) los query parameters están separados por el ampersand "&"

const formPokemon = document.querySelector("#pokemon")
const inputPokemon = document.querySelector("#pokemones")

formPokemon.onsubmit = (e) => {
    e.preventDefault()

    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${inputPokemon.value}&pageSize=5&page=1`)
    .then(res => res.json())
    .then(data => console.log(data))
}


// YO PREFIERO QUE EL FETCH SE REALICE DENTRO DE UNA FUNCIÓN
// ASÍ CONTROLAMOS LAS PETICIONES

const peticionRickAndMorty = () => {
    
    const urlPersonajes = "https://rickandmortyapi.com/api/character"

    fetch(urlPersonajes)
    .then( (res) => res.json())
    .then( (data) => {
        console.log(data)
    })
}

peticionRickAndMorty()

// SUGAR SYNTAX: ASYNC AWAIT

const peticionApi = async () => {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character")
    const data = await respuesta.json()

    console.log(data)
}

peticionApi()