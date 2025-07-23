const Task = require("../models/task");
const getAll = async (req, res) => {
  try {
    let tasks = await Task.find();
    const count = await Task.countDocuments();
    res.status(200).json({ msg: "all tasks", count: count, tasks });
  } catch (err) {
    res.status(500).json({ msg: "can not get all tasks", err });
  }
};

const createTask = async (req, res) => {
  try {
    let taskbody = req.body;
    let task = await Task.create(taskbody);
    res.status(200).json({ msg: "Task Added", task });
  } catch (err) {
    res.status(500).json({ msg: "invalid data", err });
  }
};

const getTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    if (!taskId) {
      return res.status(404).json({ msg: "this Task not exist" });
    }
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    const task = await Task.findById(taskId);
    res.status(200).json({ msg: "task founded done ", task });
  } catch (err) {
    res.status(500).json({ msg: "invalid task Id", err });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updates = req.body;

    if (!taskId) {
      return res.status(404).json({ msg: "this Task not exist" });
    }
    const task = await Task.findByIdAndUpdate(taskId, updates, { new: true });
    res.status(200).json({ msg: "Task updated", task });
  } catch (err) {
    res.status(500).json({ msg: "invalid task Id", err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    if (!taskId) {
      return res.status(404).json({ msg: "this Task not exist" });
    }
    const task = await Task.findByIdAndDelete(taskId);

    res.status(200).json({ msg: "Task Deleted", task });
  } catch (err) {
    res.status(500).json({ msg: "invalid task Id", err });
  }
};
module.exports = { getAll, createTask, getTask, updateTask, deleteTask };
