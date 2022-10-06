const express = require('express');

const db = require('./utils/database') //?Verificar credenciales
const initModels = require('./models/initModels') //?Se importa 
// const port = 9000 Esta linea fue sustituida por la de abajo
const {port} = require('./config')

const app = express()

//?Sincroniza la base de datos
db.authenticate()
    .then(() => console.log('DB Aunthentication Succesfully'))
    .catch(err =>(console.log(err)))

db.sync()
    .then(()=> console.log('Database Sync'))  //? Sincroniza los datos
    .catch(err => console.log(err))

    initModels()

app.use(express.json())  

app.get('/',(req,res)=>{
    res.status(200).json({message: 'Server Ok!'})
})



app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})