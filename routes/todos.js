import { Router } from 'express'
import connectDB from '../utils/db.js';
import Todo from '../models/Todo.js'

await connectDB();

export const todosRouter = Router()

todosRouter.get('/', async (req, res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json({todos})
    }catch(error){
        console.log(error)
    }
})

todosRouter.post('/', async (req, res) => {
    const { title } = req.body
    try{
        const todos = await Todo.create({ title: title });
        res.status(201).json({title: 'Todo added', data: todos})
    }catch(error){
        console.log(error)
    }
})

todosRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const todo = await Todo.findById(id);
        res.status(200).json(todo)
    }catch(error){
        console.log(error)
    }
})

todosRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const todo = await Todo.findByIdAndUpdate(id, { completed: true });
        res.status(200).json('Todo updated', todo)
    }catch(error){
        console.log(error)
    }
})

todosRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const todos = await Todo.findByIdAndDelete(id);
        res.status(200).json('Todo deleted', todos)
    }catch(error){
        console.log(error)
    }
})