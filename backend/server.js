const express = require('express');
const axios = require('axios');
const cors = require('cors');
const weatherRoutes = require('./routes/weather.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('api/v1/weather', weatherRoutes);


module.exports = {app};