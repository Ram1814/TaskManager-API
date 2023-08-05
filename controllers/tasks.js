const getAllTasks = (req, res) => {
    res.send("Get all Tasks")
}

const createTask = (req, res) => {    
    console.log(req.body);
    res.json(req.body)
}

const getSingleTask = (req, res) => {    
    res.json({id : req.params.id})   
}

const updateTask = (req, res) => {
    res.send("Update Task")
}

const deleteTask = (req, res) => {
    res.send("Delete Task")
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}