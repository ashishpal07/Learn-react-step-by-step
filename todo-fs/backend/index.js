const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        return res.status(411).json({
            message: "You have sent the wrong inputs to create."
        });
    }

    const createdTodo = await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    return res.status(201).json({
        message: "todo created",
        createdTodo,
    });
});

app.put("/completed", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    
    if (!parsedPayload.success) {
        return res.status(411).json({
            message: "You have sent the wrong input to update."
        });
    }

    const updatedTodo = await todo.findByIdAndUpdate(createPayload.id, {
        completed: true,
    });

    return res.status(201).json({
        message: "todo mark as completed",
        updateTodo,
    });
});

app.get("/todos", async (req, res) => {
    const result = await todo.find({});

    return res.status(200).json({
        message: "All todos are below",
        list: result,
    });
});

app.listen(port, (err) => {
    if (err) {
        console.log("Error while running express server...", err);
        return;
    }
    console.log(`Server is running on port ${port}...`);
});