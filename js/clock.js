const clock = document.querySelector('#clock');
const amPm = document.querySelector('#am-pm');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

function getClock() {
    const date = new Date();
    if (date.getHours() >= 12) {
        amPm.innerText = 'PM'
        hour.innerText = `${('00' + (date.getHours() - 12)).slice(-2)}`
    } else {
        amPm.innerText = 'AM'
        hour.innerText = `${('00' + date.getHours()).slice(-2)}`
    }
    minute.innerText = ('00' + date.getMinutes()).slice(-2);
    second.innerText = ('00' + date.getSeconds()).slice(-2);
    // clock.innerText = `${hour}:${minute} ${second}`;
    // clock.innerText = new Date().toLocaleTimeString();
    // => 이렇게 하면 한방에 해결 가능...ㅎ 다만 PM 02시가 아니라 오후 2시로 표시됨

}

getClock();
setInterval(getClock,1000);
