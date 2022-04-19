const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const Register = require("../models/register");

exports.login = async (req, res) => {
	Register.findOne(req.body)
		.then((response) => {
			console.log(response);
			if (response == null) {
				res.send({ token_id: response });
			} else {
				res.send({
					token_id: response._id,
					firstname: response.firstname,
					lastname: response.lastname,
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};
