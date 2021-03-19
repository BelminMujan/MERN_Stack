import mongoose from "mongoose"
mongoose.Promise=global.Promise;

mongoose.connect("mongodb+srv://Belmin:belmin512551@cluster0.wuirn.mongodb.net/ToDoList?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log("Connected to database")
        console.log("--------------------------------------------------------------------")
    })
    .catch((e: Error)=>{
        console.log("failed to connect to database due error: ")
        console.log(e)
    })

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports={mongoose}