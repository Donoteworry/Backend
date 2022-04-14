const mongoose = require("mongoose");

const BookAutherSchema = new mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  bookId: {
    type: String,
    allowNull: true,
  },
  AutherImage: {
    type: String,
    allowNull: true,
  },
  AutherName: {
    type: String,
    allowNull: true,
  },
  AutherDetail: {
    type: String,
    allowNull: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const BookAuther = mongoose.model("BookAuther", BookAutherSchema);

module.exports = BookAuther;
