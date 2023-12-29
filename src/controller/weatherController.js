const { getWeather } = require('../service/weatherService');

const getWeatherDetails = async (req, res) => {
  try {
    const city = req.params.city;
    const weatherData = await getWeather(city);
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getWeatherDetails,
};
