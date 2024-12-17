import { Task } from '../models/task.model.js'

export const createTask = async (req, res) => {
  const { title, description } = req.body
  const userId = req.user.id

  try {
    const newTask = new Task({
      title,
      description,
      user: userId
    })
    await newTask.save()
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' })
  }
}

export const getTasks = async (req, res) => {
  const userId = req.user.id

  try {
    const tasks = await Task.find({ user: userId })
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ message: 'Error getting tasks' })
  }
}

export const updateTask = async (req, res) => {
  const { id } = req.params
  const { title, description, completed } = req.body

  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    )
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' })
  }
}

export const deleteTask = async (req, res) => {
  const { id } = req.params

  try {
    await Task.findByIdAndDelete(id)
    res.status(200).json({ message: 'Task deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' })
  }
}
