const button = document.getElementById('todo-button');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const addTodoItem = function () {
    const value = input.value;
    if (value.length) {
        createListElement(value);
    }
};
const createListElement = function (value) {
    const li = document.createElement('li');
    li.textContent = value;
    list.appendChild(li);
};
button.addEventListener('click', addTodoItem);