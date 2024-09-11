const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

// 받아온 값을 ul 내부로 넣어주는 함수
function createTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');

    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo;
    todoList.appendChild(li);
}

// form 내부 input에 입력한 값 받아오는 함수
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    createTodo(newTodo);
}

todoForm.addEventListener('submit',handleTodoSubmit);