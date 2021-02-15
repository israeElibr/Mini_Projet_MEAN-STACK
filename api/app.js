const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// Load in mongoose models
const { List, Task, User } = require('./db/models');

const mongoose = require('./db/db')

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * GET: /lists
 * Purpose: Get All lists 
 */
app.get('/lists', (req, res) => {
  List.find({}).then((lists) => {
    res.send(lists);
  })
})

/**
 * Post: /lists
 * Purpose: Create a new list
 */
app.post('/lists', (req, res) => {
  let title = req.body.title;
  let newList = new List({
    title
  });
  newList.save().then((listDoc) => {
    res.send(listDoc);
  })
})

/**
 * Patch: /lists/:listId
 * Purpose: Update a specific list
 */
app.patch('/lists/:listId', (req, res) => {
  List.findOneAndUpdate(
    {
      _id: req.params.listId
    },
    {
      $set: req.body
    }).then(() => {
      res.send({message: "Updated successfully"});
    })
})

/**
 * Delete: /lists/:listId
 * Purpose: Delete a specific List
 */
app.delete('/lists/:listId', (req, res) => {
  List.findOneAndRemove({
    _id: req.params.listId
  }).then((removedDoc) => {
    res.send(removedDoc);
  })
})


// Tasks
/**
 * GET: /lists/:listId/tasks
 * Purpose: get all tasks in specific Id
 */
app.get('/lists/:listId/tasks', (req, res) => {
  Task.find({ _listId : req.params.listId }).then((tasks) => {
    res.send(tasks);
  })
})

/**
 * Post: /list/:listId/tasks
 * Puspose: Create a new task to a specific Id
 */
app.post('/lists/:listId/tasks', (req, res) => {
  let newTask = new Task({
    title: req.body.title,
    _listId: req.params.listId
  });
  newTask.save().then((tasks) => {
    res.send(tasks);
  })
})

/**
 * Patch: /lists/:listId/tasks/:taskId
 * Purose: Update one task in specifi list
 */
app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findOneAndUpdate({
    _id: req.params.taskId,
    _listId: req.params.listId
  }, {
    $set: req.body
  }).then(() => {
    res.send({ message: "Task updated successfully" });
  })
})

/**
 * Delete: /lists/:listId/tasks/:taskId 
 * Purpose: Delete a task 
 **/
app.delete('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findByIdAndRemove({
    _id: req.params.taskId,
    _listId: req.params.listId
  }).then((removedTask) => {
    res.send(removedTask);
  })
})


/**
 * Get: /users
 * Purpose: Get All Users
 */
app.get('/users', (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  })
})

/**
 * Get: /users/:username
 * Purpose: Get User with the username send in params
 */
app.get('/users/:username/:password', (req, res) => {
  User.find({
    username: req.params.username,
    password: req.params.password
  }).then((oneUser) => {
    res.send(oneUser);
  })
})

/**
 * Post: /users
 * Purpose: Create New User
 */
app.post('/users', (req, res) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
  newUser.save().then((user) => {
    res.send(user);
  })
})


app.listen(3000, () => {
  console.log("server running on port 3000...");
})