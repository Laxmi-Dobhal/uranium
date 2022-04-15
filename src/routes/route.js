const express = require("express");
const router = express.Router();
const userData = require("../models/userModel");
const userController = require("../controllers/userController");

router.post("/createBook", userController.createBooks);

 router.get("/getXINRBooks", userController.getXINRBooks);
router.get("/bookList", userController.bookList);
router.get("/getRandomBooks", userController.getRandomBooks);
// let data = req.body;
// let savedData =  userData.create(data);
// res.send({ user: savedData });

module.exports = router;