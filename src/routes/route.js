/*const express = require("express");
const router = express.Router();
const userData = require("../models/userModel");
const userController = require("../controllers/userController");

router.post("/createBook", userController.createBooks);

router.get("/getBooks", userController.getBooks);

// let data = req.body;
// let savedData =  userData.create(data);
// res.send({ user: savedData });

module.exports = router;*/

const express = require("express");
const router = express.Router();
const bookData = require("../models/bookModel");
const authorData = require("../models/authormodel.js");
const allController = require("../controllers/allController");

router.post("/createBook", allController.createBook);

router.post("/createAuthor", allController.createAuthor);

router.post("/allBook", allController.allBooks);

router.get('/getTwoState',allController.getTwoState);

router.get('/authorNames',allController.authorNames);

module.exports =router;

