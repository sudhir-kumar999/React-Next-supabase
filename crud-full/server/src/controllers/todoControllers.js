import mongoose from "mongoose";
import Todo from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const save = await Todo.create({
      title,
    });
    return res.status(200).json({
      success: true,
      message: "todo created",
      data: save,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "error occurred",
    });
  }
};

export const getTodo = async (req, res) => {
  const data = await Todo.find();
  if (!data) {
    return res.json({
      success: false,
      message: "todo fetch error",
    });
  }
  res.json({
    success: true,
    message: "todo fetched",
    data: data,
  });
};

export const deleteTodo = async (req, res) => {
  const dlt = await Todo.findByIdAndDelete(req.params.id);
  if (!dlt) {
    return res.json({
      success: false,
      message: error,
    });
  }
  return res.json({
    success: true,
    message: "todo deleted",
  });
};

export const updateTodo = async (req, res) => {
  const { title } = req.body;
  const update = await Todo.findByIdAndUpdate(
    req.params.id,
    { title },
    { new: true, runValidators: true }
  );
  if (!update) {
    return res.json({
      success: false,
      message: "error",
    });
  }
  return res.json({
    success: true,
    message: "todo edit saved",
  });
};
