const express = require('express')
const app = express()
const task = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()



//// Middleware
app.use(express.json())
app.use('/api/v1/task', task)

//// Routes
app.get('/hello', (req, res) => {
    res.send('Hello to task manager api')
})

const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()

