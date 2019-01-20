
async function getWeatherAW( woeid ){
	try{
	const result = await fetch
	(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
	const data = await result.json();

    //TODO - ES6 loop
    for( var i = 0; i < 4; i++){
      let todaysWeather = data.consolidated_weather[i];
      
      document.querySelectorAll("i")[i].innerHTML = `<img src="https://www.metaweather.com/static/img/weather/${todaysWeather.weather_state_abbr}.svg">`
      document.querySelectorAll("h2")[i].innerHTML = `The weather state for the ${todaysWeather.applicable_date} in ${data.title} is <br><strong>${todaysWeather.weather_state_name}</strong>`
      document.querySelectorAll("p")[i].innerHTML = `Min temp: <strong>${Math.round(todaysWeather.min_temp)}º C</strong> <br>Max temp: <strong>${Math.round(todaysWeather.max_temp)}º C</strong>`;
    }
    
	} catch( error) {
		  document.querySelector("h2").textContent = "Sorry, something went wrong";
	}
}
getWeatherAW(753692);