const axios = require('axios');
require('dotenv').config();

const getWeatherData = ('/weather', async (req, res) => {
    const { q } = req.query;
    const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
    const WEATHER_API_URL = 'https://api.weatherapi.com/v1/forecast.json';
    if (!q) {
        return res.status(400).json({ error: 'Location query parameter is required' });
    }
    try {
        const response = await axios.get(WEATHER_API_URL, {
            params: {
                key: WEATHER_API_KEY,
                q,
                days: 1, 
            },
        });

        const {
            location: {
                name: city,
                country,
                localtime: dateTime,
            },
            current: {
                temp_c: temperature,
                condition: { text: condition },
                precip_mm: precipitation,
                humidity,
                wind_kph: wind,
            },
            forecast: {
                forecastday: [ { hour } = {} ],
            },
        } = response.data;

        const [date, time] = dateTime.split(' ');
        const [year, month, day] = date.split('-');
        const [hourNow] = time.split(':');

        const hourlyForecast = hour.slice(0, 5).map(hour => ({
            time: hour.time.split(' ')[1],
            temp: hour.temp_c,
        }));

        res.json({
            city,
            country,
            date: `${day}/${month}/${year}`,
            hour: hourNow,
            temperature,
            condition,
            precipitation,
            humidity,
            wind,
            hourlyForecast,
        });
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Failed to fetch weather data', details: error.message });
    }
});

module.exports = { getWeatherData };