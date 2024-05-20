import { TodosModel } from "../models/todos.model.js";
import { UserModel } from "../models/user.model.js";

const findAllTodos = async () => {
  return await TodosModel.find();
};

//create todo
const createTodo = async (text, userId) => {
  const newTodo = await TodosModel.create({ text });
  UserModel.findByIdAndUpdate(userId, {
    $push: { todos: newTodo._id },
  }).exec();
  return newTodo;
};

// //get todo by id
const getTodoById = async (id) => {
  return await TodosModel.findById(id);
};

// //delete todo by id
const deleteTodoById = async (id) => {
  return await TodosModel.findByIdAndDelete(id);
};

// //update todo by id
const updateTodoById = async (id, title, isCompleted) => {
  return await TodosModel.findByIdAndUpdate(
    id,
    {
      title,
      isCompleted,
    },
    {
      returnDocument: "after",
    }
  );
};

export default { getTodoById, findAllTodos, updateTodoById, deleteTodoById, createTodo };
