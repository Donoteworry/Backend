const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
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

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = UserProfile;
