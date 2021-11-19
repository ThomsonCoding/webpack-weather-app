import '../SCSS/forcastReportUI.scss';
import forcastReportsFetch from './forcastReportsFetch';

const scroll = document.createElement('ul');
const nextForcastList = document.createElement('ul');
const todaysDate = new Date();
const currentHour = todaysDate.getHours();

const addForcastReport = (lat, lon) => {
    const pickLocation = document.querySelector('.Location_holder');
    pickLocation.classList.add("hide");

    const body = document.querySelector('body'); 
    const forcastContainer = document.createElement('ul');
    forcastContainer.classList.add('forcast__container');
    forcastContainer.classList.add(lat);
    body.appendChild(forcastContainer);

    const forcastReportHeader = document.createElement('h2');
    forcastReportHeader.classList.add('main_header');
    forcastReportHeader.textContent = "Forecast report";

    const returnButton = document.createElement('button');
    returnButton.classList.add('return_button');
    returnButton.textContent = "Return";

    returnButton.addEventListener("click", () => {
        const hourlyContainer = document.querySelector('.hourly__container');
        const dailyContainer = document.querySelector('.daily__container'); 

        removingOldData(hourlyContainer); 
        removingOldData(dailyContainer); 
        removingOldData(forcastContainer); 

        forcastContainer.remove();
        pickLocation.classList.remove("hide");
    });

    const removingOldData = (parent) => {
        while (parent.firstChild) {
            parent.firstChild.remove()
        }  
    }

    /////////////////////////////////////// (Hourly)
    const hourlyWeatherContainer = document.createElement('li');

    const todayMiniHeader = document.createElement('p');
    todayMiniHeader.classList.add('today_mini_header');
    todayMiniHeader.textContent = "Today";

    // hourlyWeatherContainer.classList.add('hourly__container');

    scroll.classList.add('hourly__container');
    hourlyWeatherContainer.appendChild(todayMiniHeader);
    hourlyWeatherContainer.appendChild(scroll);

    // To pull the hourly and next day data.
    forcastReportsFetch(lat, lon)
    .then((data) => hoursList(data, data.hourly.splice(0, 12))); 

    forcastReportsFetch(lat, lon)
    .then((data) => dailyList(data.daily)); 

    /////////////////////////////////////// (Daily)
    const dailyWeatherContainer = document.createElement('li');

    const nextForcast = document.createElement('p');
    nextForcast.classList.add('today_mini_header');
    nextForcast.textContent = "Next forecast";

    nextForcastList.classList.add('daily__container');
    dailyWeatherContainer.appendChild(nextForcast);
    dailyWeatherContainer.appendChild(nextForcastList);

    [forcastReportHeader, returnButton, hourlyWeatherContainer, dailyWeatherContainer].forEach(el => forcastContainer.appendChild(el));


}

const hoursList = (timeZoneOffset, hours) => {

    const timeDifferenceCalculated = (timeZoneOffset.timezone_offset / 60)/60;
    console.log(timeDifferenceCalculated);

    hours.forEach((hour, i) => {
        const hourListItem = document.createElement('li');
        scroll.appendChild(hourListItem);

        const weatherIcon = document.createElement('img');
        weatherIcon.src = `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`
        weatherIcon.classList.add("hour_image_icon");
        hourListItem.appendChild(weatherIcon);

        const dayTimeTempSection = document.createElement('section');
        weatherIcon.classList.add('dayTimeTempSection');
        hourListItem.appendChild(dayTimeTempSection);
    
        const whichHour = document.createElement('p');
        whichHour.textContent = `${hourCalc(i,timeDifferenceCalculated)}`;
        whichHour.classList.add('mini_temp');
        dayTimeTempSection.appendChild(whichHour);

        const hourTemp = document.createElement('p');
        hourTemp.textContent = `${Math.round(hour.temp)}°`;
        hourTemp.classList.add('mini_temp');
        dayTimeTempSection.appendChild(hourTemp);

    })
}

const dailyList = (days) => {
    days.forEach((day, i) => {
        const dayListItem = document.createElement('li');
        nextForcastList.appendChild(dayListItem);

        const whichDay = document.createElement('p');
        whichDay.textContent = `${date(i)}`;
        whichDay.classList.add('mini_temp'); // To change
        dayListItem.appendChild(whichDay);     

        const dayTemp = document.createElement('p');
        dayTemp.textContent = `${Math.round(day.temp.day)}°`;
        dayTemp.classList.add('big_temp'); // To change
        dayListItem.appendChild(dayTemp);

        const weatherIcon = document.createElement('img');
        weatherIcon.src = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
        weatherIcon.classList.add("day_image_icon"); //To change

        dayListItem.appendChild(weatherIcon);

    })
}

const hourCalc = (i, timeDifferenceCalculated) => {
    let hourNumber = currentHour + i + timeDifferenceCalculated;

    if (hourNumber > 23) { hourNumber = (currentHour + timeDifferenceCalculated + i) - 24; }
    if (hourNumber < 10) { return ("0" + hourNumber.toFixed(2)); }

    return hourNumber.toFixed(2);
}

const timeZoneCalc = () => {
    console.log(todaysDate);
    console.log(currentHour);
    let utc_offset = todaysDate.getTimezoneOffset();
    console.log(currentHour + utc_offset);
    
}

timeZoneCalc();


const date = (i) => {
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let dateNumber = todaysDate.getDay() + i;

    //Prevents the array selection number from being above 6
    if(todaysDate.getDay() + i > 6) {
        dateNumber = (todaysDate.getDay() + i) - 7;
    } 
    let day = weekday[dateNumber];
    return day;
}

export default addForcastReport;