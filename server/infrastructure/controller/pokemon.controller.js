const db = require("../../domain/models");
const fibSequence = require("../utils");
const { checkPrime } = require("node:crypto");

const pokemonController = {
  list: async (_, res) => {
    return db.Pokemons.findAll({})
      .then((data) =>
        res.status(200).send({ data, message: "Get List Successfully!" })
      )
      .catch((error) => res.status(400).send(error));
  },
  find: async (req, res) => {
    const id = req.params.id;
    return db.Pokemons.findByPk(id)
      .then((data) =>
        res.status(200).send({ data, message: "Get Data Successfully!" })
      )
      .catch((error) => res.status(400).send(error));
  },
  create: async (req, res) => {
    const success = Math.random() < 0.5;
    if (success) {
      db.Pokemons.create({ ...req.body, renameCounter: 0 })
        .then((data) =>
          res.status(201).send({ message: "Pokemon berhasil ditangkap", data })
        )
        .catch((error) => res.status(500).send(error));
    } else {
      res.status(201).send({
        message: "Pokemon gagal di tangkap (success probability is 50%)",
      });
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const fibNumber = fibSequence(Number(req.body.renameCounter) + 1);
    db.Pokemons.update(
      {
        renameCounter: Number(req.body.renameCounter) + 1,
        name: `${req.body.name}-${fibNumber}`,
      },
      { where: { id } }
    )
      .then((data) => {
        if (data > 0)
          res.status(201).send({ message: "data updated successfully" });
        else res.status(400).send({ message: "data not found" });
      })
      .catch((error) => res.status(500).send(error.message));
  },
  delete: async (req, res) => {
    const id = req.params.id;
    let random = Math.floor(Math.random() * 10 + 1);
    checkPrime(BigInt(random), (err, isPrime) => {
      if (err) res.status(500).send(err);
      if (isPrime) {
        db.Pokemons.destroy({ where: { id } })
          .then((data) => {
            if (data > 0)
              res.status(201).send({
                message: `Berhasil melepaskan pokemon`,
                prime: random,
                result: 'success',
              });
            else res.status(400).send({ message: "data not found" });
          })
          .catch((error) => res.status(500).send(error));
      } else {
        res.status(201).send({
          message: `Gagal melepaskan pokemon`,
          prime: random,
          result: 'failed',
        });
      }
    });
  },
};

module.exports = pokemonController;
