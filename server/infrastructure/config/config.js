require("dotenv").config({ path: `${process.cwd()}/.env` });
const fs = require("fs");

module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "phincon_pokemon_app",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: "postgres",
  },
};
