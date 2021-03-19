import mongoose from "mongoose"
const TaskSchema=new mongoose.Schema({
    _categoryId:{
        type:mongoose.Types.ObjectId,
        required:true,
    },
    title:{
        type:String,
        required:true,
        minlength:1
    },
    description:{
        type:String,
        minlength:1
    },
    author:{
        type:String,
        required:true,
    }
})

const Task=mongoose.model("Task", TaskSchema)
module.exports={Task}