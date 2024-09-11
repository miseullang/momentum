const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

function deleteTodo(evnet) {
    const li = evnet.target.parentElement;
    li.remove();
}

// 받아온 값을 ul 내부로 넣어주는 함수
function createTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteTodo)

    li.appendChild(span);
    li.appendChild(button);
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