const express =require("express");
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const  mongoose  = require('mongoose');
const app = express();


// mongoose.connect( "mongodb+srv://Laxmi_Dobhal:MPY5xYd5tUMu48w2@cluster0.su5lt.mongodb.net/laxmi_dobhalDB")
//   .then(() => {
//     console.log("connected to mongodb");
//   }).catch((err)=> console.log("error is here"));

  mongoose.connect( "mongodb+srv://Laxmi_Dobhal:MPY5xYd5tUMu48w2@cluster0.su5lt.mongodb.net/laxmi_dobhalDB")
  .then(() => {
    console.log("connected to mongodb");
  }).catch((err)=> console.log("error is here"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', route);


app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
