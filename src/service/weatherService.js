const axios = require('axios');

const apiKey = '2f9b21d06fe1a6f3e48b0e172fd40fae'; 
const getWeather = async (city) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getWeather,
};