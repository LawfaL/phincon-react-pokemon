require('dotenv').config({path: `${process.cwd()}/.env`});
var cors = require('cors')

const express = require("express")
const app = express()

app.use(express.json())
app.use(cors())

const pokemonRouter = require('./interface/routes/pokemon.route');

app.use("/api/v1/pokemon", pokemonRouter)
app.use(express.static("./dist"))

app.use('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'route not found'
    })
})

const PORT = process.env.APP_PORT || 3000

app.listen(PORT, () => {
    console.log('app is running')
})