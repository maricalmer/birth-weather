const averageCoverage = (data) => {
  return Math.round(data.reduce((a,b) => a + b,0) / 24);
}

export default averageCoverage;