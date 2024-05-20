const addTodo = () => {
    const dataSendToServer = {
        text: 'test',
        userId: '664b1912aba389f0fce8072a'
    }
    fetch('/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataSendToServer)
    })
}

