const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  authorName: String,
  bookName: String,
  category: {
    type: String,
    unique: true,
  },
  year: { type: Number, required: true },
});
module.exports = mongoose.model("User1", bookSchema);