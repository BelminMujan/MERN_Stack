"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const { mongoose } = require("./db/mongoose");
const body_parser_1 = __importDefault(require("body-parser"));
let cors = require('cors');
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(body_parser_1.default.json());
const { Category } = require("./db/models/category.model");
const { Task } = require("./db/models/task.model");
app.get("/category", (req, res) => {
    Category.find()
        .then((categories) => {
        res.send(categories);
    });
});
app.get("/category/:id", (req, res) => {
    Category.find({ _id: req.params.id })
        .then((cat) => res.send(cat));
});
app.post("/category", (req, res) => {
    let title = req.body.title;
    let newCategory = new Category({
        title
    });
    newCategory.save().then((category) => {
        res.send(category);
    });
});
app.delete("/category/:id", (req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then((obj) => res.send(obj))
        .catch((e) => {
        console.log("Error due deleting entry:");
        console.log(e);
    });
});
app.patch("/category/:id", (req, res) => {
    Category.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(() => {
        res.sendStatus(200);
    });
});
app.get("/category/tasks", (req, res) => {
    Task.find()
        .then((tasks) => {
        res.send(tasks);
    }).catch((e) => {
        console.log("Error due retrieving tasks:");
        console.log(e);
    });
});
app.get("/category/:categoryId/task/:taskId", (req, res) => {
    Task.find({
        _categoryId: req.params.categoryId,
        _id: req.params.taskId
    }).then((task) => {
        res.send(task);
    }).catch((e) => {
        console.log("Error due retrieving specific task:");
        console.log(e);
    });
});
app.post("/category/:categoryId/task", (req, res) => {
    let newTask = new Task({
        title: req.body.title,
        _categoryId: req.params.categoryId
    });
    newTask.save().then((task) => {
        res.send(task);
    });
});
app.delete("/category/:categoryId/task/:taskId", (req, res) => {
    Task.findOneAndRemove({
        _id: req.params.taskId,
        _categoryId: req.params.categoryId
    }).then(() => {
        res.sendStatus(200);
    }).catch((e) => {
        console.log("Error due deleting specific task");
        console.log(e);
    });
});
app.patch("/category/:categoryId/task/:taskId", (req, res) => {
    Task.findByIdAndUpdate({
        _id: req.params.taskId,
        _categoryId: req.params.categoryId
    }, { $set: req.body }).then(() => res.sendStatus(200));
});
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
