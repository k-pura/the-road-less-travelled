var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var logger = require('morgan');


var profileRouter = require('./routes/profile');
var submitRouter = require('./routes/submit');
var homeRouter = require('./routes/home');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

require('dotenv').config();
require('./config/activitiesDatabase');
require('./config/passport');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: 'Users Info',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/submit', submitRouter);
app.use('/home', homeRouter);
app.use('/profile', profileRouter);


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
