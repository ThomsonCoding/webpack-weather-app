const forcastReportsFetch = async function (lat, lon){
    const myKey = 'c394a103dd1f0d201c32226e45bbcce5';

    const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${myKey}&units=metric`
    );
    
    const data = await response.json();
    
    return data;

};

export default forcastReportsFetch;