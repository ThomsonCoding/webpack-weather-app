import addForcastReport from './forcastReportUI';

const weatherContainer = document.querySelector(".container");

const addWeatherReport = (data) => {

    console.log(data);

    const city = document.createElement('li');
    city.classList.add("city__container")
    city.addEventListener("click", () => {
        addForcastReport("51.5085", "-0.1257");
    });
    
    const cityTemp = document.createElement('h3');
    cityTemp.textContent = `${Math.round(data.main.temp)}°`;
    cityTemp.classList.add('city_temp')
    
    const cityWeather = document.createElement('p');
    cityWeather.textContent = `${data.weather[0].main}`;
    cityWeather.classList.add('city_weather');

    const cityName = document.createElement('h3');
    cityName.textContent = `${data.name}`;
    cityName.classList.add('city_name');

    const weatherIcon = document.createElement('img');
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.classList.add("material-icons");
    weatherIcon.classList.add("weather__icon");

    // city.appendChild(cityTemp);
    // city.appendChild(cityWeather);
    // city.appendChild(cityName);
    // city.appendChild(weatherIcon);

    [cityTemp, cityWeather, cityName, weatherIcon].forEach(el => city.appendChild(el));
    
    if(weatherContainer.querySelectorAll('li').length == 4) {
        weatherContainer.removeChild(weatherContainer.lastElementChild);
    }

    weatherContainer.prepend(city);

}

export default addWeatherReport;
