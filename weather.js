const API_KEY = '669d3a333221c25db689662ed04f33e2';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
     .then(response => response.json())
     .then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        weather.innerText = `${data.weather[0].main} / ${(data.main.temp).toFixed(1)}˚`
        city.innerText = data.name
     })


}

function onGeoError() {
    alert('사용자의 위치를 사용할 수 없어, 날씨를 불러올 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
