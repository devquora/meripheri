require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose      = require('./database');
bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//require('./routes/user')(app, express);
//require('./routes/question')(app, express);
//require('./routes/profile')(app, express);
//require('./routes/category')(app, express);
//require('./routes/productTable')(app, express);
//require('./routes/imagesTable')(app, express);
//require('./routes/seller')(app, express);
//require('./routes/language')(app, express);
//require('./routes/order')(app, express);



port = process.env.PORT || 8081;
app.listen(port);
console.log('Server started on: ' + port);
