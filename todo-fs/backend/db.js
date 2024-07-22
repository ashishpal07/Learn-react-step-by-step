const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo-app")
.then(() => console.log("Database connected successfully."))
.catch((err) => console.error("Error while connecting database", err))

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
    }
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo: todo,
};