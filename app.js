const express = require("express");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const index = require('./routes/index');
app.use('/', index);

app.listen(3000, function() {
    console.log("Server started on port 3000");
});