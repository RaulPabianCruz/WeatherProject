import './style.css';
import updateWeatherData from './weatherDisplay';

async function getWeather(cityLocation) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=72b96543d1d549ab8d1205722242901&q=${cityLocation}&days=3`,
      { mode: 'cors' },
    );
    const forecastData = await response.json();
    return forecastData;
  } catch (error) {
    return error;
  }
}

function processResponseJSON(response) {
  const forecastArray = response.forecast.forecastday;
  const locationObject = response.location;
  return [Promise.resolve(forecastArray), Promise.resolve(locationObject)];
}

function processForecastDays(forecastArray) {
  const newArray = forecastArray.map((forecastday) => {
    const tempCelsius = forecastday.day.avgtemp_c;
    const tempFarenheit = forecastday.day.avgtemp_f;
    const conditionText = forecastday.day.condition.text;
    const conditionIcon = forecastday.day.condition.icon;
    return { tempCelsius, tempFarenheit, conditionText, conditionIcon };
  });
  return newArray;
}

function requestWeather(event) {
  const regionName = event.target.value;
  const weatherPromise = getWeather(regionName);
  weatherPromise
    .then(
      (response) => Promise.all(processResponseJSON(response)),
      (error) => console.log(error),
    )
    .then(
      (forecastData) => {
        const weatherArray = processForecastDays(forecastData[0]);
        return {
          country: forecastData[1].country,
          city: forecastData[1].name,
          state: forecastData[1].region,
          weatherDataArray: weatherArray,
        };
      },
      (error) => console.log(error),
    )
    .then((processedData) => {
      updateWeatherData(processedData);
      console.log(processedData);
    })
    .catch((error) => console.log(error));
}

const searchBar = document.querySelector('#search-bar');
searchBar.addEventListener('search', requestWeather);
