const express = require("express");
const app = express();
app.use(express.json());
const cors=require("cors")
app.use(cors());
let port=process.env.PORT ||3001;
 app.listen(port,()=>{
    console.log(`app listening at port ${port} `)
 })
app.use(express.urlencoded({extended:true}));
// respond with "hello world" when a GET request is made to the homepage

let message={uname:"jafar","pass":123}


app.get("/", (req, res) => {
 
  console.log(req.body);
});
app.post("/",(  req,res)=>{
console.log(req.body);

})
app.post("/api", (req, res) => {
 res.json({message:"Perfect, i have received all the data",object:req.body});
  console.log(req.body);
  
}); 


app.get("/api/about",(req,res)=>{
res.json(message);


})
  