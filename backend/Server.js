import express, { json, urlencoded } from "express";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import Todos from "./models/Todo.js";
import cors from "cors";
import User from "./models/Userlogin.js";
const app = express();

app.use(json());

app.use(cors());
let port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`app listening at port ${port} `);
});
app.use(urlencoded({ extended: true }));
try {
  const conn = mongoose.connect(
    "mongodb+srv://root:root@cluster0.q9yicuo.mongodb.net/tasklist"
  );
  console.log("database access successful");
} catch (e) {
  console.log("unable to connect " + e);
}

app.get("/", (req, res) => {
  console.log(req.body);
});

app.post("/api", (req, res) => {
  const todo = Todos(req.body);
  todo.save().then(console.log("Item saved to database"));
  res.status(200).json({ message: "data saved successfully" });
});

app.post("/Register", (req, res) => {
  const { fname, lname, email, pass } = req.body;
  if (!fname || !lname || !email || !pass) {
    return res.json({ message: "Please fill all the fields!" });
  }

  User.findOne({ email }).then((userExists) => {
    if (userExists) {
      console.log("user already exists");
      return res.json({ error: "User already exists, please sign up." });
    }
    
    bcrypt.hash(pass, 10, (err, hashedPassword) => {
      if (err) {
        console.log("Error hashing password: " + err);
        return res.json({ error: "An error occurred while hashing the password." });
      }
    
      const newUser = new User({fname, lname, email, pass:hashedPassword});
      newUser.save()
        .then(() => {
          console.log("user saved successfully");
          return res.json({ successful: "User details saved successfully" });
        })
        .catch((err) => {
          console.log("Error: " + err);
          return res.json({ error: err });
        });
    });
  }); 
});

app.get("/Login",async (req, res) => {
const {email,pass}=req.body;
const Userexists=await User.findOne({email});
if(!Userexists){
  return res.json({"Error":"User does not exist please signup."})
}

});

app.delete("/deleteAll", (req, res) => {
  Todos.deleteMany({}).then((result) => {
    try {
      res.json({ successfull: "Todos Deleted" });
      console.log(`All Todos Deleted`);
    } catch (err) {
      console.log(err);
      res.json({ err: "Error deleting todos " });
    }
  });
});

app.get("/getalltodos", (req, res) => {
  Todos.find().then((documents) => {
    res.status(200).json(documents);
  });
});

app.delete("/:id", async (req, res) => {
  const itemId = req.params.id;
  console.log(itemId);
  try {
    const deleteTodo = await Todos.findByIdAndDelete(itemId);
    if (deleteTodo) {
      console.log("Delete successful");
      res.status(200).json({ message: "Item deleted successfully." });
    } else {
      console.log("Item not found");
      res.status(404).json({ error: "Item not found." });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error." });
  }
});
