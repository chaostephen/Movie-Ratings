const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


const {getMovies, addMovie} = require('./controller.js')

app.get('/api/movies', getMovies)
app.post('/api/movies', addMovie)

app.listen(4004,()=>{
    console.log('Up on 4004')

})