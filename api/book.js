const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const Register = require("../models/register");
const Book = require("../models/book");
const BookAuther = require("../models/bookAuthor");

// ====================== public api ===========================

exports.getBookList = async (req, res) => {
  Book.find()
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((error) => {
      res.status(500);
    });
};

exports.getBookById = async (req, res) => {
  console.log(req.params);
  Book.findOne({ _id: req.params.bookId })
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((error) => {
      res.status(500);
    });
};
exports.getBookAutherById = async (req, res) => {
  BookAuther.findOne({ bookId: req.params.bookId })
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((error) => {
      res.status(500);
    });
};
// =============================================================

// ====================== private api ==========================

exports.getBookByUser = async (req, res) => {
  Book.find({ userId: req.params.userId })
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((error) => {
      res.status(500);
      Auther;
    });
};
exports.getBookAutherByUser = async (req, res) => {
  BookAuther.findOne({ bookId: req.params.bookId })
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((error) => {
      res.status(500);
    });
};

// ==============================================================

exports.createBook = async (req, res) => {
  Book.create({
    userId: req.body.userId,
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
    about: req.body.about,
    detail: req.body.detail,
  })
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((error) => {
      res.status(500);
    });
};
exports.createAuther = async (req, res) => {
  BookAuther.create({
    bookId: req.body.bookId,
    AutherImage: req.body.image,
    AutherName: req.body.name,
    AutherDetail: req.body.detail,
  })
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((error) => {
      res.status(500);
    });
};

// ================================================================

exports.editBook = async (req, res) => {
  let update = {
    userId: req.body.userId,
    name: req.body.name,
    price: req.body.price,
    about: req.body.about,
    detail: req.body.detail,
  };

  let filter = {
    _id: req.body.bookId,
  };

  Book.findOneAndUpdate(filter, update)
    .then((response) => {
      res.status(200).json({ message: response });
    })
    .catch((error) => {
      res.status(500);
    });
};

// ================================================================
