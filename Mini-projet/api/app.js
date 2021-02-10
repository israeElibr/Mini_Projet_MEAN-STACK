const express =require('express');
const app=express();

const { mongoose } = require('./db/mongoose')

const bodyParser = require('body-parser');

// const {list,Task}=require('./db/models');
const { list, Task } = require('./db/models');

app.use(bodyParser.json())

//GET all lists from db
app.get('/lists',(req ,res)=>{
    list.find({}).then((listdoc)=>{
        res.send(listdoc);
    });
})
//Create new list
app.post('/lists',(req,res)=>{
    const newList = new list({
        title: req.body.title
    });
    newList.save().then((listAdded) => {
        res.send(listAdded);
    })
})
//Upadate 
app.patch('/lists/:id',(req,res)=>{
    list.findOneAndUpdate({
        _id: req.params.id
    },
    {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    })
})
//Delete
app.delete('/lists/:id',(req,res)=>{
   list.findByIdAndRemove({
       _id:req.params.id
   }).then(()=>{
       res.sendStatus(200);
   })
});
 //Get tasks of a specefic list
app.get('lists/:listId/tasks',(req,res)=>{
  Task.find({
      _listId:req.params.listId
  }).then((tasks)=>{
     res.send(tasks);
  })
});
//create new task of a specefic list
app.post('/lists/:listId/tasks',(req,res)=>{
    Task.find({
        _listId:req.params.listId
    }).then((tasks) => {
        res.send(tasks);
    })
});
app.listen(3000,()=>{
console.log("port 3000")
})
