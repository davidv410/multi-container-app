import 'dotenv/config'
import express from 'express'
import { todosRouter } from './routes/todos.js'

const app = express()

app.use(express.json())

app.use('/todos', todosRouter)

app.listen(process.env.PORT || 9000, () => {
    console.log('Server is up')
})