const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 5000; //Save the port number where your server will be listening
var bodyParser = require("body-parser");
var os = require("os");
var hostname = os.hostname();

// models
const Register = require("./models/register");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// check login
app.post("/api/applyLogin", (req, res) => {
  const data = req.body;
  Register.findOne({ where: { email: data.email, password: data.password } })
    .then((response) => {
      if (response) {
        res.status(200).json({ message: "Account is exists" });
      }
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

// register api for apply
app.post("/api/applyRegister", (req, res) => {
  const data = req.body;

  Register.findOne({ where: { email: data.email } })
    .then((response) => {
      if (response) {
        res.status(200).json({ message: "Account is exists" });
      } else {
        Register.create({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          password: data.password,
        })
          .then((success) => {
            res.status(200).json({ message: "Account has been created !" });
          })
          .catch((reject) => {
            res.status(404).json({ message: reject });
          });
      }
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

app.listen(port, () => {
  console.log(`Now listening on port ${hostname + ":" + port}`);
});
