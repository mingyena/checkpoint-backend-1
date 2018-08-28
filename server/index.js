let express = require("express");
let mongoose = require("mongoose");
let fetch = require("node-fetch");
const app = express();
let bodyParser = require("body-parser");
const fs = require('fs');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://rliu1:rliu123@ds129762.mlab.com:29762/checkpoint1");

app.use(express.static('public'));
app.use(bodyParser.json());

//Part 1
let data=[];
fs.readFile('data.csv','UTF-8', (err, csv) => {
  console.log(csv);
  data = csv.split(',');
});
app.route('/dateTime')
  .get(function (req, res) {
    res.send(Date.now());
  });

app.route('/newComments')
  .get(function(req,res){
    res.send(data[3]);
  });
app.route('/newTasks')
  .get(function(req,res){
    res.send(data[4]);
});
app.route('/newOrders')
  .get(function(req,res){
    res.send(data[5]);
});
app.route('/tickets')
  .get(function(req,res){
    res.send(data[6]);
});

//Part 2
let OrderRoutes  = require("./routes/OrderRoutes");
let CommentRoutes  = require("./routes/CommentRoutes");
let TaskRoutes  = require("./routes/TaskRoutes");

app.use(OrderRoutes);
app.use(CommentRoutes);
app.use(TaskRoutes);

//Node Fetch
app.route('/foxes')
  .get(function(req,res){
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(json => {res.send(`<image src=${json.image}>`)});
});

app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});





