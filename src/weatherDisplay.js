function updateWeatherData(weatherData) {
  const locationText = document.querySelector('.location-header');
  locationText.textContent = `${weatherData.city}, ${weatherData.state}`;

  const conditionText = document.querySelector('.condition-header');
  conditionText.textContent = weatherData.weatherDataArray[0].conditionText;

  const conditionIcon = document.querySelector('.condition-icon');
  conditionIcon.src = weatherData.weatherDataArray[0].conditionIcon;

  const celsiusText = document.querySelector('.temp.celsius');
  celsiusText.textContent = weatherData.weatherDataArray[0].tempCelsius;

  const farenheitText = document.querySelector('.temp.farenheit');
  farenheitText.textContent = weatherData.weatherDataArray[0].tempFarenheit;
}

export default updateWeatherData;
