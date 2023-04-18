const getCityData = async (city, date) => {
    /* const historicalWeatherEndpoint = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.latitude}&longitude=${city.longitude}&start_date=2023-01-01&end_date=2023-03-26&daily=weathercode,sunrise,sunset,precipitation_sum,temperature_2m_mean&timezone=${city.timezone}` */
    /* const historicalWeatherEndpoint = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.latitude}&longitude=${city.longitude}&start_date=2023-03-29&end_date=2023-03-29&hourly=rain,snowfall,cloudcover_mid,direct_normal_irradiance&timezone=${city.timezone}` */
    const historicalWeatherEndpoint = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.latitude}&longitude=${city.longitude}&start_date=${date}&end_date=${date}&hourly=rain,snowfall,cloudcover_mid,direct_normal_irradiance&daily=temperature_2m_mean,sunrise,sunset,rain_sum,snowfall_sum&timezone=${city.timezone}`
    const response = await fetch(historicalWeatherEndpoint);
    const data = await response.json();
    console.log(data);
    return data;
  }

  export default getCityData;
