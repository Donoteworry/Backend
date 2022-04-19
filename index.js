const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 5000; //Save the port number where your server will be listening
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = mongoose.connection;
const Routes = require("./api/index");
const cors = require('cors')


mongoose.connect(
	"mongodb+srv://localhost:localhost@cluster0.vj3ny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (!err) console.log("db connected");
		else console.log("db error");
	}
);
app.use(cors());
app.options("*", cors());
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(Routes);

// =============================================== authentication api ===============================================

// ==================================================================================================================

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
