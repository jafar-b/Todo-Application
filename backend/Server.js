import express, { json, urlencoded } from "express";

import mongoose from "mongoose";
import Todos from "./models/Todo.js"
const app = express();
app.use(json());
import cors from "cors";
app.use(cors());
let port=process.env.PORT ||3001;
 app.listen(port,()=>{
    console.log(`app listening at port ${port} `)
 })
app.use(urlencoded({extended:true}));


const conn=mongoose.connect("mongodb+srv://root:root@cluster0.q9yicuo.mongodb.net/tasklist");
if(conn){
    console.log("Connection successfull");

}else{
    console.log("connection failed");
}
app.get("/", (req, res) => {
  console.log(req.body);
});

app.post("/api", (req, res) => {
  // console.log("hello request.bodyyyy  ",req.body);
  const todo=Todos(req.body)
  todo.save().then(console.log("Item saved to database"));
  res.json({message:req.body+"saved to db successfully"});
}); 


app.get("/api/alldata",(req,res)=>{
  Todos.find().then((documents)=>{
    res.json(documents);
    console.log(documents);
  })
})
  