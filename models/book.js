const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
	id: {
		type: Number,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	userId: {
		type: String,
		allowNull: true,
	},
	image: {
		type: String,
		allowNull: true,
	},
	name: {
		type: String,
		allowNull: true,
	},
	price: {
		type: String,
		allowNull: true,
	},
	about: {
		type: String,
		allowNull: true,
	},
	detail: {
		type: String,
		allowNull: true,
	},
	startDate: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
