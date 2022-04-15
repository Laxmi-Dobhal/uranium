/*const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  authorName: String,
  bookName: String,
  category: {
    type: String,
    unique: true,
  },
  year: { type: Number, required: true },
});
module.exports = mongoose.model("User1", bookSchema);*/
//const { stringify } = require("nodemon/lib/utils");
const mongoose =require("mongoose");
const bookModel =new mongoose.Schema({
  name:String,
  author_id:{ type:Number,require:true},
  price: Number,
  ratings: Number,
});
module.exports = mongoose.model("books",bookModel);

