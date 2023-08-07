const { json } = require('express')
const Tasks = require('../models/tasks')
const asyncWrapper = require('../middleware/asyncWrapper')
const { createCustomError } = require('../errors/customError')

const getAllTasks = asyncWrapper( async (req, res) => {    
        const tasks = await Tasks.find({})
        res.status(200).json({tasks})
        // res.status(200).json({ tasks, amount : tasks.length })   
})

const createTask = asyncWrapper (async (req, res) => {    
    const task = await Tasks.create(req.body)
    res.status(201).json({task})   
})

const getSingleTask = asyncWrapper( async (req, res, next) => {    
    const { id: taskID } = req.params
    const task = await Tasks.findOne({_id: taskID})
    if (!task) {
        return next(createCustomError(`No task with id ${taskID}`, 404))
        // return res.status(404).json({ msg : `No task with id ${taskID}`})
    }
    res.status(200).json({ task })    
})

const updateTask = asyncWrapper (async (req, res) => {    
        const { id : taskID} = req.params
        const task = await Tasks.findOneAndUpdate({_id : taskID}, req.body)
        if (!task) {
            return next(createCustomError(`No task with id ${taskID}`, 404))
        }
        res.status(200).json({ task })   
})

const deleteTask = asyncWrapper (async (req, res) => {   
        const { id : taskID} = req.params
        const task = await Tasks.findOneAndDelete({_id: taskID})
        if (!task) {
            return next(createCustomError(`No task with id ${taskID}`, 404))
        }
        res.status(200).json({ task })     
})

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}