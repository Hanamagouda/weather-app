const express = require('express');
const path = require('path');
const { getWeatherDetails } = require('./controller/weatherController');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather/:city', getWeatherDetails);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
