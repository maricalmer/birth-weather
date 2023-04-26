function prependZeroOnSingleDigits(value) {
	return (value < 9 ? "0" + value : value);
}

const convertDateForApi = (date) => {
	const day = prependZeroOnSingleDigits(date.$D);
  const month = prependZeroOnSingleDigits(date.$M+1);
	return `${date.$y}-${month}-${day}`
}

const convertDateForData = (date) => {
	return new Date(date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
}

export { convertDateForApi, convertDateForData };
