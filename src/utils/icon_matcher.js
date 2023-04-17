function getTotalAmountHoursOf(selectedValues) {
	return selectedValues.filter((x) => x > 0)
}

function getAverage(selectedValues) {
	return selectedValues.reduce((x,y) => x+y)/selectedValues.length
}

const matchIconClass = (weatherData) => {
	if (weatherData.daily.snowfall_sum[0] > 0) return 'snowflake';
	if (getTotalAmountHoursOf(weatherData.hourly.rain).length > 5) return 'cloud-showers-heavy';
	if (getTotalAmountHoursOf(weatherData.hourly.rain).length > 0 && getAverage(weatherData.hourly.cloudcover_mid) > 20) return 'cloud-rain';
	if (getTotalAmountHoursOf(weatherData.hourly.rain).length > 0) return 'cloud-sun-rain';
	if (getTotalAmountHoursOf(weatherData.hourly.cloudcover_mid).length > 5) return 'cloud';
	if (getTotalAmountHoursOf(weatherData.hourly.cloudcover_mid).length > 2) return 'cloud-sun';
	return 'sun';
}

export default matchIconClass;
