const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: String,
    allowNull: true,
  },
  lastname: {
    type: String,
    allowNull: true,
  },
  email: {
    type: String,
    allowNull: true,
  },
  password: {
    type: String,
    allowNull: true,
  },
  isVerify: {
    type: String,
    allowNull: true,
    default: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Register = mongoose.model("Register", RegisterSchema);

module.exports = Register;
