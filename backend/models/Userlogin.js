import mongoose from "mongoose";
const { model, Schema } = mongoose;
const UserSchema = new Schema({
fname:{type:String,required:true},
lname:{type:String,required:true},
email:{type:String,unique:true},
pass:{type:String,required:true}
});

const User = model("User", UserSchema);
export default User;
