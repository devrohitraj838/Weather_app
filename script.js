const apiKey ="9f8b2adeb3a82c82038adc48a21fabce";

const searchbtn = document.getElementById("searchbtn");
const cityInput = document.getElementById("cityInput");

searchbtn.addEventListener("click",getweather);
async function getweather() {
    const city = cityInput.value;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + " C";
    document.getElementById("condition").innerText = data.weather[0].main;
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind-speed").innerText = data.wind.speed +" km/h";
    


    
}