import todosService from "../services/todos.service.js";

export const index = async(req, res) => {
    const todos = await todosService.findAllTodos();
    res.render("../views/todos", {
        todos: todos
    });
};

//get all todos
export const getAllTodos = async (req, res) => {
  const todos = await todosService.findAllTodos();
  res.send(todos);
};

//create todo
export const createTodo = async (req, res) => {
  const { text, userId } = req.body;
  const newTodo = await todosService.createTodo(text, userId);
  res.status(201).send(newTodo);
};

//get todo by id
export const getTodoById = async (req, res) => {
  const id = req.params.id;
  const todo = await todosService.getTodoById(id);
  res.send(todo);
};

//delete todo by id
export const deleteTodoById = async (req, res) => {
  const id = req.params.id;
  await todosService.deleteTodoById(id);
  res.send();
};

//update todo by id
export const updateTodoById = async (req, res) => {
  const id = req.params.id;
  const { title, isCompleted } = req.body;
  const newTodo = await todosService.updateTodoById(id, title, isCompleted);
  res.status(200).send(newTodo);
};