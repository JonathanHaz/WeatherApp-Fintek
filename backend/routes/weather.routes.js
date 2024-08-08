const weather = require('../controllers/weather.controllers');
const express = require('express');
const router = express.Router();

router.get('/weather', weather.getWeatherData);

module.exports = router;