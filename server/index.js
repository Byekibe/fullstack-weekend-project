import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import connectDB from './config/db.js';
import Todo from './models/Todo.js';

const port = process.env.PORT
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/todo", async (req, res) => {
    const todos = await Todo.find();
    return res.status(200).json(todos);
});

app.get("/todo/:id", async(req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    return res.status(200).json(todo);
});

app.post("/todo", async(req, res) => {
    const newTodo = new Todo({ ...req.body });
    const insertedTodo = await newTodo.save();
    return res.status(201).json(insertedTodo);
});

app.put("/todo/:id", async(req, res) => {
    const { id } = req.params;
    await Todo.updateOne({_id: id}, req.body);
    const updatedTodo = await Todo.findById(id);
    return res.status(200).json(updatedTodo);
});

app.delete("/todo/:id", async(req, res) => {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    return res.status(200).json(deletedTodo)
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});