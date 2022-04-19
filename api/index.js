var express = require("express");
var router = express.Router();

const Register = require("./register");
const Login = require("./login");
const Book = require("./book");

router.post("/api/profileDetail", Register.getUserProfile);
router.post("/api/register", Register.register);
router.post("/api/login", Login.login);

router.post("/api/createBook", Book.createBook);
router.post("/api/createAuther", Book.createAuther);
router.post("/api/createReview", Book.createReview);

router.post("/api/editBook", Book.editBook);
router.post("/api/editAuther", Book.editAuther);
router.get("/api/bookList", Book.getBookList);
router.post("/api/book", Book.getBookById);
router.post("/api/Review", Book.getBookReview);

router.post("/api/bookDetail", Book.getBookByUser);
router.post("/api/autherDetail", Book.getBookAutherByUser);

module.exports = router;
