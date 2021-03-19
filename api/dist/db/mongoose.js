"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect("mongodb+srv://Belmin:belmin512551@cluster0.wuirn.mongodb.net/ToDoList?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("Connected to database");
    console.log("--------------------------------------------------------------------");
})
    .catch((e) => {
    console.log("failed to connect to database due error: ");
    console.log(e);
});
mongoose_1.default.set("useCreateIndex", true);
mongoose_1.default.set("useFindAndModify", false);
module.exports = { mongoose: mongoose_1.default };
