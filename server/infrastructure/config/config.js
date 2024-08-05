require("dotenv").config({ path: `${process.cwd()}/.env` });
const pg = require("pg")

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: 5432,
    dialect: "postgres",
    dialectModule: pg
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    dialectModule: pg
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: 5432,
    dialect: "postgres",
    dialectModule: pg
  },
};
