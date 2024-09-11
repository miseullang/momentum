const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

// const toDos = []; // toDos 배열이 비워져 있으면 새로운 to-do를 저장할 때마다 기존 to-do는 날라감
let toDos = []; // 1. let으로 갱신 가능하도록 변경

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(evnet) {
    const li = evnet.target.parentElement;
    // 삭제를 클릭한 li의 id를 제외한 나머지 li만 리턴해서 todos 배열 바꿔치기(이전의 배열은 가비지 콜렉터가 알아서 버려줌)
    // 로컬스토리지의 id(li.id)는 string이고, toDo.id는 숫자라서 타입 변환을 해준 뒤에 비교해야 함
    toDos = toDos.filter(toDo => toDo.id !== Number(li.id));
    li.remove();
    saveToDos();
}

// 받아온 값을 ul 내부로 넣어주는 함수
// createTodo로 들어오는 newTodo는 newTodoObj이 됨
function createTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text; // newTodo를 그대로 넣어주면 object object로 반환하므로, newTodo.text로 바꿔주기
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

    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    };
    toDos.push(newTodoObj);
    createTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener('submit',handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // 2. 이전에 로컬스토리지에 저장해둔 투두 리스트가 있으면 해당 리스트로 toDos를 업데이트
    toDos = parsedToDos;
    parsedToDos.forEach(createTodo);
}