function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log('당신의 위치는', lat, lng);
}

function onGeoError() {
    alert('사용자의 위치를 사용할 수 없어, 날씨를 불러올 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);