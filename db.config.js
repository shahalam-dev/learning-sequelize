const Sequelize = require("sequelize");
const dbName = "sequelize";
const dbUser = "root";
const dbPass = "Sharif;123";

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: "localhost",
  post: 7427,
  dialect: "postgres",
});

const db = {
  Sequelize,
  sequelize,
};

module.exports = db;
