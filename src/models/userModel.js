const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  bookName: {type:String, required:true},
  authorName: String,
  price: {
  indianPrice: String,
  europeanPrice:String,
    //unique: true,
  },
  tags:[String],
  stockAvailable:Boolean,
  year: { type: Number, default : 2021 },
});
module.exports = mongoose.model("books", bookSchema);