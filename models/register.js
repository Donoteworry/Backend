const { Sequelize } = require("sequelize");

const sequelize = require("../database/database");

const Register = sequelize.define("Register", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: Sequelize.STRING,
    unique: true,
  },
  lastname: {
    type: Sequelize.STRING,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    unique: true,
  },
});

module.exports = Register;
