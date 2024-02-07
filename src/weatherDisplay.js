let isTempCelsius = false;
let tempInCelsius = 0;
let tempInFarenheit = 0;

function displayTempInCelsius() {
  const celsiusText = document.querySelector('.temp-display');
  celsiusText.textContent = `Average Temperature: ${tempInCelsius}${String.fromCharCode(
    176,
  )}C`;

  const toggleBttn = document.querySelector('.temp-toggle');
  toggleBttn.textContent = 'Change to Farenheit';
}

function displayTempInFarenheit() {
  const farenheitText = document.querySelector('.temp-display');
  farenheitText.textContent = `Average Temperature: ${tempInFarenheit}${String.fromCharCode(
    176,
  )}F`;

  const toggleBttn = document.querySelector('.temp-toggle');
  toggleBttn.textContent = 'Change to Celsius';
}

function displayTemp() {
  if (isTempCelsius) {
    displayTempInCelsius();
  } else {
    displayTempInFarenheit();
  }
}

function toggleTempDisplay() {
  isTempCelsius = !isTempCelsius;
  displayTemp();
}

function updateWeatherData(weatherData) {
  const locationText = document.querySelector('.location-header');
  locationText.textContent = `${weatherData.city}, ${weatherData.state}`;

  const conditionText = document.querySelector('.condition-header');
  conditionText.textContent = weatherData.weatherDataArray[0].conditionText;

  const conditionIcon = document.querySelector('.condition-icon');
  conditionIcon.src = weatherData.weatherDataArray[0].conditionIcon;

  tempInCelsius = weatherData.weatherDataArray[0].tempCelsius;
  tempInFarenheit = weatherData.weatherDataArray[0].tempFarenheit;
  displayTemp();
}

function clearSearchField() {
  const searchField = document.querySelector('#search-bar');
  searchField.value = '';
}

export { updateWeatherData, toggleTempDisplay, clearSearchField };
