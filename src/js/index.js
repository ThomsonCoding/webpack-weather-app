import '../SCSS/weather-app.scss';

const searchInput = document.querySelector('.search_inputbox');
const searchButton = document.querySelector('.search_button');

searchButton.addEventListener('click', () => {
  const currentValue = searchInput.value;
  console.log(currentValue);
});
