const API_KEY = "835347575f5b4b86acf203709261701";

const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeather");
const weatherResult = document.getElementById("weatherResult");
const cityNameEl = document.getElementById("cityName");
const descriptionEl = document.getElementById("description");
const temperatureEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");

getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (!city) return alert("اكتب اسم المدينة!");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ar`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                cityNameEl.textContent = `🌤 الطقس في ${data.name}`;
                descriptionEl.textContent = `📝 الحالة: ${data.weather[0].description}`;
                temperatureEl.textContent = `🌡 الحرارة: ${data.main.temp}°C`;
                humidityEl.textContent = `💧 الرطوبة: ${data.main.humidity}%`;
                weatherResult.classList.remove("hidden");
            } else {
                alert("❌ المدينة غير موجودة!");
                weatherResult.classList.add("hidden");
            }
        })
        .catch(err => {
            console.error(err);
            alert("حصل خطأ في الاتصال بالإنترنت أو الـ API");
        });
});
