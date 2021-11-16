import './SCSS/weather-app.scss';

function test() {
    const input = document.createElement('input');
    input.classList.add("weather_input_search");
    const body = document.querySelector('body');
    body.append(input);
}

export default test;