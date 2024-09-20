const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const greetingBox = document.querySelector('#greeting-box');
const refresh = document.querySelector('#refresh');
const logout = document.querySelector('#show-more');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// 초기 화면 : 로컬스토리지에 저장된 유저 정보가 없을 때, 유저 정보 입력 받기
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

// 유저 정보를 받았을 때
function paintGreetings(username) {
    greetingBox.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}`;
}

function hanleReroad () {
    window.location.reload();
}

function handleLogout() {
    if (confirm('로그아웃 하기')) {
        localStorage.clear();
        window.location.reload();
    }
}

// 로컬스토리지에 유저 정보가 있는지 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // form을 보여준다
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // greeting을 보여준다(= 닉네임이 든 h2)
    paintGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);
refresh.addEventListener('click', hanleReroad);
logout.addEventListener('click', handleLogout);
