const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs'); //sets our view engine as ejs
app.use(bodyParser.urlencoded({extended: true}));


var newItems = [];
app.get("/", function(req, res){
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {day:day, newItems:newItems});
});

app.post("/", function(req,res){
  var newItem = req.body.newItem;
  newItems.push(newItem);
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server up and running on port 3000");
});
