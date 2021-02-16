const { mongo } = require("mongoose");

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true})
  .then(() => {
    console.log('Connected successfully to database ...');
  }).catch((e) => {
    console.log("Connection failed to database ...");
    console.log(e);
  });

module.exports = { mongoose };