const Movies = require('../models/movies.model')
const uuid = require('uuid')


//? Generar lapromesa
const getAllMovies = async()=>{
    const data = await Movies.findAll() //?Traer todos los registros (select * from movies_crud)
    return data
}

//? Resolver la promesa
getAllMovies()
    .then(res => console.log(res))
    .catch(err => console.log(err))

    //? Otra manera de resolver promesa diferente al .then/.catch
    // try {
    //     console.log(getAllMovies()) 
    // } catch {
    //     console.log(err)
    // }



    const createMovies = async(data)=>{
        const newMovie={
            id:uuid.v4(),
            name: data.name,
            genre: data.genre,
            duration: data.duration,
            releaseDate: data.releaseDate
        }
        const response= await Movies.create(newMovie) //? Es el insert into
        return newMovie
    }

    createMovies({
        name: 'Pacific Rim',
        genre: 'Action, Scifi',
        duration: 120,
        releaseDate: '2010/10/30'
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))