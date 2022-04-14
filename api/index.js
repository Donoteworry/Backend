var express = require("express");
var router = express.Router();

const Register = require("./register");
const Login = require("./login");
const Book = require("./book");

router.post("/api/register", Register.register);
router.post("/api/login", Login.login);

router.post("/api/createBook", Book.createBook);
router.post("/api/createAuther", Book.createAuther);

router.get("/api/bookList", Book.getBookList);
router.get("/api/:bookId/book", Book.getBookById);
router.get("/api/:bookId/Auther", Book.getBookAutherById);

router.get("/api/:bookId/bookDetail", Book.getBookByUser);
router.get("/api/:bookId/autherDetail", Book.getBookAutherByUser);

module.exports = router;
