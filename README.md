<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather API App README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            color: #333;
        }
        h1, h2, h3 {
            color: #007bff;
        }
        code {
            background: #f4f4f4;
            border: 1px solid #ddd;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background: #f4f4f4;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<h1>Weather API App</h1>

<h2>Overview</h2>
<p>The Weather API App provides weather information by fetching data from the WeatherAPI. It includes current weather conditions and hourly forecasts. The app is built with a React frontend and a Node.js/Express backend.</p>

<h2>Features</h2>
<ul>
    <li>Fetch current weather conditions for a specified city.</li>
    <li>Display hourly weather forecasts for the next 5 hours.</li>
    <li>Handle city searches and provide appropriate error messages.</li>
</ul>

<h2>Technology Stack</h2>
<ul>
    <li><strong>Frontend</strong>: React</li>
    <li><strong>Backend</strong>: Node.js, Express</li>
    <li><strong>API</strong>: <a href="https://www.weatherapi.com/" target="_blank">WeatherAPI</a></li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js and npm installed on your machine.</li>
    <li>An API key from WeatherAPI (sign up at <a href="https://www.weatherapi.com/" target="_blank">WeatherAPI</a> to get one).</li>
</ul>

<h3>Installation</h3>
<pre><code>1. Clone the repository:

   git clone https://github.com/yourusername/weather-api-app.git
   cd weather-api-app

2. Install dependencies for the backend:

   cd backend
   npm install

3. Create a .env file in the backend directory and add your WeatherAPI key:

   WEATHER_API_KEY=your_weather_api_key

4. Install dependencies for the frontend:

   cd ../frontend
   npm install

5. Start the backend server:

   cd ../backend
   npm start

6. Start the frontend development server:

   cd ../frontend
   npm start

   The app should now be running at http://localhost:3000.</code></pre>

<h2>Usage</h2>
<ol>
    <li>Open the app in your browser.</li>
    <li>Enter a city name in the search field.</li>
    <li>Click the 'Check' button to fetch and display weather information for the city.</li>
</ol>

<h2>API Endpoints</h2>

<h3><code>GET /weather</code></h3>
<p>Fetches weather data for a specified city.</p>

<h4>Query Parameters:</h4>
<ul>
    <li><code>q</code> (string): The name of the city to search for.</li>
</ul>

<h4>Responses:</h4>
<ul>
    <li><strong>200 OK</strong>: Returns weather data, including current conditions and hourly forecast.</li>
    <li><strong>400 Bad Request</strong>: Missing or invalid city name.</li>
    <li><strong>500 Internal Server Error</strong>: Error fetching data from the API.</li>
</ul>

<h2>Development</h2>
<ul>
    <li><strong>Backend</strong>: Located in the <code>backend</code> directory.</li>
    <li><strong>Frontend</strong>: Located in the <code>frontend</code> directory.</li>
</ul>

<h2>Contributing</h2>
<p>Feel free to submit issues and pull requests. Please follow standard coding practices and provide clear commit messages.</p>

<h2>License</h2>
<p>This project is licensed under the <a href="LICENSE" target="_blank">MIT License</a>.</p>

</body>
</html>
