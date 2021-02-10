const e = require('express');
const mongoose =require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser:true}).then(()=>{
    console.log('connected to databse');
}).catch((e)=>{
    console.log("Eroor from db");
    console.log(e);
});

mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);

module.exports ={
    mongoose
};
