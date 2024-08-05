const fibSequence = require("../utils");
const { checkPrime } = require("node:crypto");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class PokemonPersistence {
  static async List(_, res) {
    return prisma.pokemon
      .findMany()
      .then((data) =>
        res.status(200).send({ data, message: "Get List Successfully!" })
      )
      .catch((error) => res.status(400).send(error));
  }

  static async Find(req, res) {
    const id = req.params.id;
    return prisma.pokemon
      .findUnique({ where: { id: Number(id) } })
      .then((data) =>
        res.status(200).send({ data, message: "Get Data Successfully!" })
      )
      .catch((error) => res.status(400).send(error.message));
  }

  static async Create(req, res) {
    const success = Math.random() < 0.5;
    if (success) {
      prisma.pokemon
        .create({
          data: {
            ...req.body,
            renameCount: 0,
          },
        })
        .then((data) =>
          res.status(201).send({ message: "Pokemon berhasil ditangkap", data })
        )
        .catch((error) => res.status(500).send(error));
    } else {
      res.status(201).send({
        message: "Pokemon gagal di tangkap (success probability is 50%)",
      });
    }
  }

  static async Update(req, res) {
    const id = req.params.id;
    const fibNumber = fibSequence(Number(req.body.renameCount) + 1);
    prisma.pokemon
      .update({
        where: { id: Number(id) },
        data: {
          renameCount: Number(req.body.renameCount) + 1,
          name: `${req.body.name}-${fibNumber}`,
        },
      })
      .then(() => {
        res.status(201).send({ message: "data updated successfully" });
      })
      .catch((error) => res.status(500).send(error.message));
  }

  static async Delete(req, res) {
    const id = req.params.id;
    let random = Math.floor(Math.random() * 10 + 1);
    checkPrime(BigInt(random), (err, isPrime) => {
      if (err) res.status(500).send(err);
      if (isPrime) {
        prisma.pokemon
          .delete({ where: { id: Number(id) } })
          .then(() => {
            res.status(201).send({
              message: `Berhasil melepaskan pokemon`,
              prime: random,
              result: "success",
            });
          })
          .catch((error) => res.status(500).send(error));
      } else {
        res.status(201).send({
          message: `Gagal melepaskan pokemon`,
          prime: random,
          result: "failed",
        });
      }
    });
  }
}

module.exports = PokemonPersistence;
