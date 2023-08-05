const express = require('express')
const app = express()
const task = require('./routes/tasks')


//// Middleware
app.use('/api/v1/task', task)


//// Routes
app.get('/hello', (req, res) => {
    res.send('Hello to task manager api')
})

const port = 3000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})