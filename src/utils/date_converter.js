function prependZeroOnSingleDigits(value) {
	return (value < 9 ? "0" + value : value);
}

const convertDate = (date) => {
	const day = prependZeroOnSingleDigits(date.$D);
  const month = prependZeroOnSingleDigits(date.$M+1);
	return `${date.$y}-${month}-${day}`
}

export default convertDate;
