const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/phincon_pokemon_app",
  { pool: { max: 5, min: 0, acquire: 30000, idle: 10000 } }
);

module.exports = db;

// npx sequelize-cli model:generate --name Pokemons --attributes name:string,hp:integer,att:integer,def:integer,str:integer,spd:integer,crit:integer,deletedAt:date