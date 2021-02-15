const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
    minlength: 1,
    trim: true
  },
  _listId: {
    type: mongoose.Types.ObjectId,
    required:true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

let Task = mongoose.model('Task', taskSchema);

module.exports = { Task }