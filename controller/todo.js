const todoModel = require('../models/todo.model')
const catchErr = require('../middleware/catchErr')
const customErr = require('../errors/error')

const getAllTasks = catchErr(async (req, res)=>{
    const tasks = await todoModel.find({})
        res.status(200).json({tasks})
})


const createTask = catchErr(async (req, res)=>{
    const task = await todoModel.create(req.body)
    res.status(201).json({message:"Done",task})
})


const getTask = catchErr(async (req, res,next)=>{
    const task = await todoModel.findById(req.params.id)
        if(!task)  return next(new customErr(`No task with id : ${req.params.id}`, 404))
               res.status(200).json({task})
}
)

const updateTask = catchErr(async (req, res,next)=>{
    const task = await todoModel.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
        if(!task)  return next(new customErr(`No task with id : ${req.params.id}`, 404))
            res.status(200).json({message:"Updated Done",task})
}
)

const deleteTask = catchErr(async (req, res,next)=>{
    const task = await todoModel.findOneAndDelete({_id:req.params.id})
        if(!task)  return next(new customErr(`No task with id : ${req.params.id}`, 404))
            res.status(200).json({message:"Done"})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}