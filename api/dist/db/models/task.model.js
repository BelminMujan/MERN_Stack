"use strict";
// const mongoose=require("mongoose")
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const TaskSchema=new mongoose.Schema({
//     _categoryId:{
//         type:mongoose.Types.ObjectId,
//         required:true,
//     },
//     title:{
//         type:String,
//         required:true,
//         minlength:1
//     }
// })
// const Task=mongoose.model("Task", TaskSchema)
// module.exports={Task}
const mongoose_1 = __importDefault(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    _categoryId: {
        type: mongoose_1.default.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
        minlength: 1
    }
});
const Task = mongoose_1.default.model("Task", TaskSchema);
module.exports = { Task };
