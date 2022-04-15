 
/* const userData = require("../models/userModel.js");
const createBooks = async function (req, res) {
  let data = req.body;
  let savedData = await userData.create(data);
  res.send({ user: savedData });
};
const getBooks = async function (req, res) {
  let allUser = await userData.find();
  res.send({ data: allUser });
};
module.exports.createBooks = createBooks;
module.exports.getBooks = getBooks;*/
const bookData = require("../models/bookModel.js");
const authorData = require("../models/authormodel.js");

const createAuthor = async function (req, res) {
  let data_author = req.body;
  let author_data = await authorData.create(data_author);
  res.send({ data: author_data });
};
const createBook = async function (req, res) {
  let data_book = req.body;
  let book_data = await bookData.create(data_book);
  res.send({ data: book_data });
};
const allBooks = async (req, res) => {
  let book_written = await authorData.find({
    author_name: "Chetan Bhagat",
  });
  let id = book_written[0].author_id;
  let bookName = await bookData.find({ author_id: id }).select({ name: 1 });
  //console.log(bookName);

  res.send({ bookName });
};
const getTwoState =async function(req,res){
  const savedData =await bookData.find({name:"Two states"})
  const id=savedData[0].author_id
  const idBook = await authorData.find({author_id:id}).select({author_name:1,_id:0})
  const xyz =  savedData[0].name
  const updatedPrice = await bookData.findOneAndUpdate({name:xyz},{price:100},{new:true}).select({price:1,_id:0})  
  res.send( { msg :idBook,updatedPrice } )
};
const authorNames = async function(req,res){
  const bookPrice =await bookData.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
  console.log(bookPrice)
  const array = bookPrice.map(x=>x.author_id)
  let arr=[]
  for(i=0;i<array.length;i++){
      let x= array[i]
      const xyz =await authorData.find( {author_id:x} ).select({ author_name :1,_id:0})
      console.log(xyz)
      arr.push(xyz)
    
    }
    const authorNames= arr.flat()
    res.send( { msg : authorNames } )
  
}   

module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.allBooks = allBooks;
module.exports.getTwoState=getTwoState
module.exports.authorNames=authorNames