import Travel from '../assets/travel.jpeg';
import '../SCSS/weather-app-photo.scss';

function addImage() {
  const img = document.createElement('img');
  img.classList.add('weather_img');
  img.alt = 'Travel';
  img.src = Travel;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
