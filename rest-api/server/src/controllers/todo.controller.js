import Todo from "../models/todo.js";

export const createTodo = async (req, res) => {
  const { title } = req.body;
  console.log(req.user);
  // console.log(item)
  try {
    const todo = await Todo.create({
      title,
      userId: req.user._id,
    });
    console.log(todo);
    if (!todo) {
      return res.json({
        success: false,
        message: "items not inserted",
      });
    }
    res.json({
      success: true,
      message: "item inserted",
      data: todo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (req, res) => {
  // const {userId} = req.user._id
  // console.log("uset",req.user)
  const todo = await Todo.find({ userId: req.user._id });
  res.json({
    success: true,
    message: "todo fetched",
    data: todo,
  });
};

export const deleteTodo = async (req, res) => {
  // const {id}=req.params
  const delte = await Todo.findByIdAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });
  res.json({
    success: true,
    message: "todo item deleted",
  });
};

export const updateTodo = async (req, res) => {
  const{ title }= req.body;
  const update = await Todo.findByIdAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    title,
    {new:true,
        runValidators:true
    }
  );
};
