const countHours = (data) => {
	return data.filter( (x) => x > 0).length
}

export default countHours;