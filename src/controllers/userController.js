 
 const userData = require("../models/userModel.js");
const createBooks = async function (req, res) {
  let data = req.body;
  let savedData = await userData.create(data);
  res.send({ user: savedData });
};
// const getBooks = async function (req, res) {
//   let allUser = await userData.find().count();
//   res.send({ data: allUser });
// };
const getXINRBooks = async function(req,res){
  let allUser =await userData.find({"price.indianPrice":{$in:["Rs 100","Rs 500"]},
});
res.send({data:allUser})
}
const bookList =async function (req,res){
  let allUser = await userData.find().select({bookName:1,authorName:1,_id:0});
  res.send({data:allUser});
};
const getRandomBooks = async function (req, res) {
  let allUser = await userData.find({
    $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }],
  });
  res.send({ data: allUser });
};

// const getBooksInYear =async function(req,res){
//   let year1=req.query.year;
//   let allUser = awaituserData.find({});
//   req.send({data: alluser});
// };
// }
// module.exports.getBooksInYear = getBooksInYear;
module.exports.bookList = bookList;
 module.exports.getXINRBooks = getXINRBooks;
module.exports.createBooks = createBooks;
module.exports.getRandomBooks = getRandomBooks;
// module.exports.getBooks = getBooks;