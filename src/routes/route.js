const express = require("express");
const router = express.Router();
const userData = require("../models/userModel");
const userController = require("../controllers/userController");

router.post("/createBook", userController.createBooks);

router.get("/getBooks", userController.getBooks);

// let data = req.body;
// let savedData =  userData.create(data);
// res.send({ user: savedData });

module.exports = router;