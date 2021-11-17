import '../SCSS/weather-app.scss';
import getCurrent from './getCurrent';
import getCurrentLocation from './getCurrentLocation';
import addWeatherReport from './UI';

const searchInput = document.querySelector('.search_inputbox');
const searchButton = document.querySelector('.search_button');
const locationButton = document.querySelector('.location_button');
let locations = ["Paris", "London", "Madrid", "Newcastle"];

window.addEventListener('load', () => {
  if(localStorage.getItem('Locations') !== null) {
    let Locallocations = localStorage.getItem('Locations');
    let locations = JSON.parse(Locallocations);
    locations.forEach(location => {
      getCurrent(location).then((data) => {addWeatherReport(data)});
    })
  } else {
    locations.forEach(location => {
      getCurrent(location).then((data) => {addWeatherReport(data)});
    })
  }
});

const weatherSearch = () => {
  const currentValue = searchInput.value;
  locations.push(currentValue);

  if(locations.length > 4) {
    locations.shift();
  }

  localStorage.setItem('Locations', JSON.stringify(locations));
  getCurrent(currentValue).then((data) => {addWeatherReport(data)});
}

searchButton.addEventListener('click', () => {weatherSearch(); });

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    weatherSearch();
  }
});

locationButton.addEventListener('click', () => {
  window.navigator.geolocation.getCurrentPosition(success, console.log);
});

const success = (position) => {
  let coordinates = position.coords;
  let lat = coordinates.latitude;
  let lon = coordinates.longitude;
  getCurrentLocation(lat, lon).then((data) => { getCurrent(data.name).then((data) => {addWeatherReport(data)})});
}