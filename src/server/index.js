var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var router = express.Router();

var db = require('./db');

var quananRouter = require('./routes/quanan.route');
var userRouter = require('./routes/user.route');
var authRouter = require('./routes/auth.route');
var typeFoodRouter = require('./routes/typefood.route');

var errorHandler = require('./middle-ware/error-handler');

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static('public'));

app.use('/quanan', quananRouter);
app.use('/users', userRouter);
app.use('/type', typeFoodRouter);

app.use('/auth', authRouter);

app.use(errorHandler.errorHandler());

app.listen(8081, function () {
    console.log("Ung dung Node.js dang lang nghe tai dia chi: http://localhost:8081");
})