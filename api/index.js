var express = require("express");
var router = express.Router();

const Register = require("./register");
const Login = require("./login");
const Book = require("./book");

router.post("/api/register", Register.register);
router.post("/api/login", Login.login);

router.post("/api/createBook", Book.createBook);

module.exports = router;
