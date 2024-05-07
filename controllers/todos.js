const Todos = require("../models/todos")

const index = (req, res) => {
    const todos = Todos.getTodos();
    res.render("../views/todos", {
        todos: todos
    });
};

const addTodo = async (req, res) => {
    Todos.addTodo(req.body);
    res.send("Successfully added")
};

const deleteTodo = async (req, res) => {

};

module.exports = {
    index, addTodo, deleteTodo
};