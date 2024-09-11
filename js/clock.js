const clock = document.querySelector('#clock');


function getClock() {
    const date = new Date();
    const hour = date.getHours() > 12 
    ? `PM ${('00' + (date.getHours() - 12)).slice(-2)}` 
    : `AM ${('00' + date.getHours()).slice(-2)}`;
    const minute = ('00' + date.getMinutes()).slice(-2);
    const second = ('00' + date.getSeconds()).slice(-2);
    clock.innerText = `${hour}:${minute}:${second}`;
    // clock.innerText = new Date().toLocaleTimeString();
    // => 이렇게 하면 한방에 해결 가능...ㅎ 다만 PM 02시가 아니라 오후 2시로 표시됨
}

getClock();
setInterval(getClock,1000);
