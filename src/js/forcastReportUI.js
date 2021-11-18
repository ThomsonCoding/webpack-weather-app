import '../SCSS/forcastReportUI.scss';
import forcastReportsFetch from './forcastReportsFetch';


const addForcastReport = (lat, lon) => {
    //Select the Pick location information and hide it. 
    const pickLocation = document.querySelector('.Location_holder');
    pickLocation.classList.add("hide");
    // To pull the hourly and next day data.
    forcastReportsFetch(lat, lon); 
    //Selects the body to add the Forcast Reports li
    const body = document.querySelector('body'); 
    //Creates the li element that will store the Forcast report data.
    const forcastContainer = document.createElement('ul');
    //Adds the class to the data.
    forcastContainer.classList.add('forcast__container');
    //Connects the li to the body. 
    body.appendChild(forcastContainer);

    const forcastReportHeader = document.createElement('h2');
    forcastReportHeader.classList.add('main_header');
    forcastReportHeader.textContent = "Forecast report";

    [forcastReportHeader].forEach(el => forcastContainer.appendChild(el));


}

export default addForcastReport;