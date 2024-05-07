const todos = [
    { id: 1, title: "Go to mall", isCompleted: false },
    { id: 2, title: "Create app", isCompleted: true }
]

const getTodos = () => {
    return todos;
}

const addTodo = (todo) => {
    todos.push(todo)
}

module.exports = {
    getTodos,
    addTodo
}