const express = require('express');
const app = express();

const usermodel = require('./usermodel');

app.get('/' , (req,res)=>{
res.send('hello');
})

app.get('/create' , async (req,res)=>{
let createduser = await usermodel.create({
    name: "Mayank",
    username: "mannny",
    email: "mayankgoley@gmail.com"
})
res.send(createduser);
})

app.get('/update' ,async (req,res)=>{
let Updateduser = await usermodel.findOneAndUpdate({username: "mannny"} , {name: "mayank goley"} , {new:true})

res.send(Updateduser);
})

app.get("/read", async (req,res)=> {
    let users = await usermodel.find();
    res.send(users);

})




app.listen(3000);