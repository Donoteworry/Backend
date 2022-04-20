const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
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
	userName: {
		type: String,
		allowNull: true,
	},
	review: {
		type: String,
		allowNull: true,
	},
	startDate: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
