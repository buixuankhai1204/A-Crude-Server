var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var logger = require('morgan');
var errorHandle = require('./Controllers/ErrorHandleController')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const AppError = require("./Ultilities/AppError");
var cors = require('cors')

var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(errorHandle);

module.exports = app;
