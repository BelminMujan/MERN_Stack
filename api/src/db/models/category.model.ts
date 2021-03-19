import mongoose from "mongoose"
const CategorySchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:1,
        maxlength:25,
        trim:true
    }
})

const Category=mongoose.model("Category", CategorySchema)
module.exports={Category}