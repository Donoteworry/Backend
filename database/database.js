const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("noteupload", "root", "Localhost", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
