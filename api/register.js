const express = require("express"); //Import the express dependency
const { create } = require("../models/register");
const app = express(); //Instantiate an express app, the main work horse of this server
const Register = require("../models/register");

exports.register = async (req, res) => {
	Register.exists({ email: req.body.email })
		.then((response) => {
			if (response) {
				res.status(200).json({ message: "Account Already exists" });
			} else {
				Register.create(req.body)
					.then((createReponse) => {
						res.status(200).json({ message: createReponse._id });
					})
					.catch((createError) => {
						res.status(500).json({ message: createError });
					});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

exports.getUserProfile = async (req, res) => {
	Register.findOne({ _id: req.body.userId })
		.then((response) => {
			res.status(200).json({ message: response });
		})
		.catch((error) => {
			console.log(error);
		});
};
