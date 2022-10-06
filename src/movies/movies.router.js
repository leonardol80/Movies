//? Manejador de rutas

const router = require('express').Router() //Importar las rutas y no necesitamos imnportar elapp en todas

//? Este es el prefijo: /api/v1/movies


router.get('/') //? /movies

router.post('/') //? /movies

router.get('/:id') //? /movies/:id

router.delete('/:id') //? /movies/:id

router.patch('/:id') //? /movies/:id

router.put('/:id') //? /movies/:id

module.exports = router

// La variable srouter contiene todas las rutas