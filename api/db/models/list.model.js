const mongoose = require('mongoose');

let listSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
    minlength: 1,
    trim: true
  }
});

let List = mongoose.model('List',listSchema);

module.exports = {
  List
};