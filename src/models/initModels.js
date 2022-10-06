//? Se agregan todas las tablas o modelos que se crean 
const Movies = require('./movies.model') //?Modelos siempre en Mayusculas

const initModels= ()=>{
    //? Aqui van todas las relaciones de mis modelos
    Movies
}

module.exports = initModels