const express=require("express");
const mongoose=require("mongoose");
const User=require("./dbsetup");
const cors=require("cors");

require("dotenv").config();
const port=3001;
const app=express();
app.use(express.json());
app.use(cors());
try{
mongoose.connect("mongodb+srv://root:0@cluster0.q9yicuo.mongodb.net/todo",{useNewUrlParser:true});
console.log("connection successfull");

}catch(err){
console.log(err);
}
app.get("/",(req,res)=>{
    res.json(req.body)
    

})
app.listen(port,()=>{
    console.log(`app started listening at port: ${port}`)

})