document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;

    const user = {
        username: username,
        age: age
    }
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res=> res.json()).then(() => {
        window.location.href = 'todos'
    })
    
    
});
