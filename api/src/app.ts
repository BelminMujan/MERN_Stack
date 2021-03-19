import express, {Application, Request, Response, NextFunction} from "express"
const app=express()
const { mongoose } = require("./db/mongoose")
import bodyParser from "body-parser"
let cors = require('cors')
const PORT= process.env.PORT || 5000;


app.use(cors())

app.use(bodyParser.json())



const {Category}=require("./db/models/category.model")
const {Task}=require("./db/models/task.model")


app.get("/category",(req,res)=>{
    Category.find()
    .then((categories:typeof Category)=>{
        res.send(categories)
    })
})
app.get("/category/:id",(req,res)=>{
    Category.find({_id:req.params.id})
    .then((cat:typeof Category)=>res.send(cat))
})

app.post("/category",(req,res)=>{
    let title=req.body.title
    let newCategory=new Category({
        title
    })
    newCategory.save().then((category: typeof Category)=>{
        res.send(category)
    })

})

app.delete("/category/:id",(req,res)=>{
    Category.findByIdAndDelete(req.params.id)
    .then((obj: typeof Category)=> res.send(obj) )
    .catch((e: Error 
    )=>{
        console.log("Error due deleting entry:")
        console.log(e)
    })
})

app.patch("/category/:id",(req,res)=>{
    Category.findOneAndUpdate(
        {_id:req.params.id},
        {$set:req.body}
    ).then(()=>{
        res.sendStatus(200)
    })

})


app.get("/tasks",(req,res)=>{
    Task.find()
    .then((tasks: typeof Task)=>{
        res.send(tasks)
    }).catch((e: Error)=>{
        console.log("Error due retrieving tasks:")
        console.log(e)
    })
})

app.get("/category/:categoryId/task",(req,res)=>{
    Task.find({_categoryId:req.params.categoryId})
    .then((tasks: typeof Task)=>{
        res.send(tasks)
    }).catch((e: Error)=>{
        console.log("Error due retrieving tasks:")
        console.log(e)
    })
})

app.get("/category/:categoryId/task/:taskId",(req,res)=>{
    Task.find({
        _categoryId:req.params.categoryId,
        _id:req.params.taskId
    }).then((task: typeof Task)=>{
        res.send(task)
    }).catch((e: Error)=>{
        console.log("Error due retrieving specific task:")
        console.log(e)
    })
})

app.post("/category/:categoryId/task",(req,res)=>{
    let title=req.body.title
    let description=req.body.description
    let author=req.body.author
    let _categoryId=req.params.categoryId
    let newTask=new Task({
        title,
        description,
        author,
        _categoryId
    })
    newTask.save().then((task: typeof Task)=>{
        res.send(task)
    })

})
app.delete("/category/:categoryId/task",(req,res)=>{
    const taskArray=Task.find({
        _categoryId:req.params.cetegoryId
    }).then((task:typeof Task)=>{
        console.log(task)
    })
})

app.delete("/category/:categoryId/task/:taskId",(req,res)=>{
    Task.findOneAndRemove({
        _id:req.params.taskId,
        _categoryId:req.params.categoryId
    }).then(()=>{
        res.sendStatus(200)
    }).catch((e:Error)=>{
        console.log("Error due deleting specific task")
        console.log(e)
    })
})

app.patch("/category/:categoryId/task/:taskId",(req,res)=>{
    Task.findByIdAndUpdate({
        _id:req.params.taskId,
        _categoryId:req.params.categoryId
    },{$set:req.body}).then(()=>res.sendStatus(200))
})




app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
})