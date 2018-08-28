let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 date:{
     required:true,
     type:String
 },
 message:{
     required:true,
     type:String
 }
});

module.exports =  mongoose.model("Comment", schema);
