require('dotenv').config({path: `${process.cwd()}/.env`});
var cors = require('cors')
const pokemonRouter = require('./interface/routes/pokemon.route');
const express = require("express")

const app = express()
const PORT = process.env.APP_PORT || 3000

app.use(express.json())
app.use(cors())
app.use("/api/v1/pokemon", pokemonRouter)
app.use(express.static(__dirname + '/dist'));
app.use('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'route not found'
    })
})

app.listen(PORT, () => {
    console.log('app is running')
})