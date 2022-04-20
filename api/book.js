const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const Register = require("../models/register");
const Book = require("../models/book");
const BookAuther = require("../models/bookAuthor");
const Review = require("../models/review");

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
	console.log(req.body);
	Book.findOne({ _id: req.body.bookId })
		.then((response) => {
			res.status(200).json({ message: response });
		})
		.catch((error) => {
			res.status(500);
		});
};
exports.getBookReview = async (req, res) => {
	Review.find({ bookId: req.body.bookId })
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
	Book.find({ userId: req.body.userId })
		.then((response) => {
			res.status(200).json({ message: response });
		})
		.catch((error) => {
			res.status(500);
		});
};

exports.getBookAutherByUser = async (req, res) => {
	BookAuther.findOne({ bookId: req.body.bookId })
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
		university: req.body.university,
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
		AutherImage: req.body.authImage,
		AutherName: req.body.authName,
		AutherDetail: req.body.authDetail,
	})
		.then((response) => {
			res.status(200).json({ message: response });
		})
		.catch((error) => {
			res.status(500);
		});
};

exports.createReview = async (req, res) => {
	Review.create({
		bookId: req.body.bookId,
		userName: req.body.userName,
		review: req.body.review,
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
		image: req.body.image,
		name: req.body.name,
		price: req.body.price,
		about: req.body.about,
		detail: req.body.detail,
		university: req.body.university,
	};
	let filter = {
		_id: req.body.bookId,
	};
	Book.findOneAndUpdate(filter, update)
		.then((response) => {
			res.status(200).json({ message: "edit successfully !" });
		})
		.catch((error) => {
			res.status(500);
		});
};

exports.editAuther = async (req, res) => {
	let update = {
		bookId: req.body.bookId,
		AutherImage: req.body.authImage,
		AutherName: req.body.authName,
		AutherDetail: req.body.authDetail,
	};
	let filter = {
		_id: req.body.autherId,
	};
	BookAuther.findOneAndUpdate(filter, update)
		.then((response) => {
			res.status(200).json({ message: "edit successfully !" });
		})
		.catch((error) => {
			res.status(500);
		});
};

// ================================================================

exports.deleteBook = async (req, res) => {
	Book.deleteOne({ _id: req.body.bookId })
		.then((response) => {
			res.status(200).json({ message: "Book Deleted !" });
		})
		.catch((error) => {
			res.status(500);
		});
};

exports.getBookByUniversity = async (req, res) => {
	Book.find({ university: req.body.university })
		.then((response) => {
			res.status(200).json({ message: response });
		})
		.catch((error) => {
			res.status(500);
		});
};
