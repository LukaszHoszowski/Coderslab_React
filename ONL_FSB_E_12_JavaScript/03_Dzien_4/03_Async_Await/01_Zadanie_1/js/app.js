const $title = document.getElementById("#title");
const $completed = document.getElementById("#completed");
const $author = document.getElementById("#author");

async function fetchUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const result = await fetch(url)
    const user = await result.json();
    return user
}

async function fetchTodo(id) {

    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const result = await fetch(url)
    const todo = await result.json();
    return todo
}

async function renderData() {
    const todo = await fetchTodo(1)
    const user = await fetchUser(todo.userId)
    console.log(todo,user);

    // TODO: RENDER DATA
}

renderData()