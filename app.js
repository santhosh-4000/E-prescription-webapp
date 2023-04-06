const express = require("express");
const ejs = require("ejs");
var mysql = require('mysql');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// var con = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "Pavan@2002"
//   });

  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  // });

app.get("/", function(req, res) {
    var doctor_id = "h101"; //for testing
    res.render("home", { doctor_id: doctor_id, doctor_name: 'test', hospital_name: 'test'})
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});