const weatherContainer = document.querySelector(".container");

const addWeatherReport = (data) => {

    console.log(data);

    const city = document.createElement('li');
    
    const cityTemp = document.createElement('h3');
    cityTemp.textContent = `${Math.round(data.main.temp)}°`;
    
    const cityWeather = document.createElement('p');
    cityWeather.textContent = `${data.weather[0].main}`;
   
    const cityName = document.createElement('h3');
    cityName.textContent = `${data.name}`;
    city.appendChild(cityTemp);
    city.appendChild(cityWeather);
    city.appendChild(cityName);
    
    if(weatherContainer.querySelectorAll('li').length == 4) {
        weatherContainer.removeChild(weatherContainer.lastElementChild);
    }

    weatherContainer.prepend(city);

}

export default addWeatherReport;