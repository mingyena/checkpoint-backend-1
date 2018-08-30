let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 task: {
   require:true,
   type: String
 },
 date:{
     required:true,
     type:String
 }
});

module.exports =  mongoose.model("Task", schema);