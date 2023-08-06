const { json } = require('express')
const Tasks = require('../models/tasks')

const getAllTasks = (req, res) => {
    res.send("Get all Tasks")
}

const createTask = async (req, res) => {    
   try {
    const task = await Tasks.create(req.body)
    res.status(201).json({task})
   } catch (error) {
    res.status(500).json({ msg : error })
   }
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