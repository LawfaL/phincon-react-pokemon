const express = require('express')
const router = express.Router()

const pokemonController = require('../../infrastructure/controller/pokemon.controller');

router.get("/", pokemonController.list)
router.post("/", pokemonController.create)
router.put("/:id", pokemonController.update)
router.delete("/:id", pokemonController.delete)

module.exports = router