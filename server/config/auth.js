const session = require('express-session');
// var User = require('../models/UserModel.js');

module.exports = (app, express, passport) => {
  app.use(session({
    name: 'fitomo',
    secret: 'fitomo',
  }));
  app.use(passport.initialize());
  app.use(passport.session());
};