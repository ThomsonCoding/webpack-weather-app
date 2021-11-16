import Travel from './assets/travel.jpeg'

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Travel';
    img.width = 300;
    img.src = Travel;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;