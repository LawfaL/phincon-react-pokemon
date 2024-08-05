require('dotenv').config({path: `${process.cwd()}/.env`});

const express = require("express")
const app = express()
const db = require('./infrastructure/database')

app.use(express.json())

const pokemonRouter = require('./interface/routes/pokemon.route');

app.use("/api/v1/pokemon", pokemonRouter)

db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));

app.use('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'route not found'
    })
})

const PORT = process.env.APP_PORT || 8080

app.listen(PORT, () => {
    console.log('app is running')
})