const addTodo = () => {
    fetch('/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: 3, title: 'test', isCompleted: false })
    })
}

