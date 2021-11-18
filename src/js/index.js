import '../SCSS/weather-app.scss';
import getCurrent from './getCurrent';
import getCurrentLocation from './getCurrentLocation';
import addWeatherReport from './UI';


const searchInput = document.querySelector('.search_inputbox');
const searchButton = document.querySelector('.search_button');
const locationButton = document.querySelector('.location_button');
let locations = ["paris", "london", "madrid", "newcastle"];

window.addEventListener('load', () => {
  if(localStorage.getItem('Locations') !== null) {
    let Locallocations = localStorage.getItem('Locations');
    locations = JSON.parse(Locallocations);
  }
    locations.forEach(location => {
      getCurrent(location).then((data) => {addWeatherReport(data)});
    })
});

const weatherSearch = () => {
  const currentValue = searchInput.value.toLowerCase();

  if(locations.includes(currentValue)){
    console.log(locations);
    alert("You have searched this place already");
    return
  }

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
  let { latitude:lat, longitude:lon} = coordinates
  getCurrentLocation(lat, lon)
  .then((data) => { locations.includes(data.name.toLowerCase()) ? alert("Please search somewhere new") : locations.push(data.name.toLowerCase()) && locations.shift() && getCurrent(data.name)  
  .then((data) => {addWeatherReport(data)})});
}


forcast();

// const arr = [0, 1, 2, 3, 4, 5]
// const [a, b, hello] =  [0, 1, 2, 3, 4, 5]

