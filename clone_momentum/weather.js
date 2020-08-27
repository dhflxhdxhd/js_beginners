const weather = document.querySelector(".js-weather");
// https://home.openweathermap.org/api_keys 에서 API_KEY 받아옴. API 활용하기 위해.
const API_KEY = "1fc311b4ab1b1b1079416552089512a8"
const COORDS = 'coords'

function getWeather(lat, lon) {
    // data 얻는 방법 : fetch 이용
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then( //data가 넘어왔을 때 호출.
                function (response) {
            // javascript object -> json console.log(response.json());
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp} , ${place}`;
        })

}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    // API 읽어오기
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("handle Geo Error");
}

function askForCoords() {
    navigator
        .geolocation
        .getCurrentPosition(handleGeoSuccess, handleGeoError);

}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        // 좌표값이 없으면
        askForCoords();
    } else {
        // 좌표값이 있으면 getWeather(); loadedCoords는 string이기 때문에 parsing해줌.
        const parsedCoords = JSON.parse(loadedCoords);
        // console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();

}

init();