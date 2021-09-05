const weather=document.querySelector("#weather")

navigator.geolocation.getCurrentPosition(geoOk,geoError)
const API_KEY="0f5109d353156aaa8a134b5fd43aa8a7"

function geoOk(e){
    const lat=e.coords.latitude;
    const lon=e.coords.longitude;
    console.log(lat, lon)
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
    })
}

function geoError(){
    alert("Can't find you. No weather for you.")
}