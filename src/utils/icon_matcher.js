function getTotalAmountHoursOf(selectedValues) {
	return selectedValues.filter((x) => x > 0)
}

function getAverage(selectedValues) {
	return selectedValues.reduce((x,y) => x+y)/selectedValues.length
}

const matchIconClass = (weatherData) => {
	if (weatherData.daily.snowfall_sum[0] > 0) return {class: "fa-solid fa-snowflake", description: "snow"};
	if (getTotalAmountHoursOf(weatherData.hourly.rain).length > 5) return {class: "fa-solid fa-cloud-showers-heavy", description: "rain"};
	if (getTotalAmountHoursOf(weatherData.hourly.rain).length > 0 && getAverage(weatherData.hourly.cloudcover_mid) > 20) return {class: "fa-solid fa-cloud-rain", description: "clouds and rain"};
	if (getTotalAmountHoursOf(weatherData.hourly.rain).length > 0) return {class: "fa-solid fa-cloud-sun-rain", description: "showers"};
	if (getTotalAmountHoursOf(weatherData.hourly.cloudcover_mid).length > 5) return {class: "fa-solid fa-cloud", description: "clouds"};
	if (getTotalAmountHoursOf(weatherData.hourly.cloudcover_mid).length > 2) return {class: "fa-solid fa-cloud-sun", description: "clouds and sun"};
	return {class: "fa-solid fa-sun", description: "sunny"};
}

export default matchIconClass;
