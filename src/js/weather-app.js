import '../SCSS/weather-app.scss';

function inputBox() {
  const input = document.createElement('input');
  input.classList.add('weather_input_search');
  const body = document.querySelector('body');
  body.append(input);
}

export default inputBox;
