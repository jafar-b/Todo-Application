import mongoose from 'mongoose'
const {model,Schema}=mongoose;

const TodoSchema=new Schema(
    {
     Todo:{type:String ,required:true }, 
    }
) 

const Todos= model('tasks', TodoSchema);
export default Todos;




 




