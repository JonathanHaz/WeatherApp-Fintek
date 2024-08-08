<!DOCTYPE html>
<html lang="en">
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
   git clone https://github.com/JonathanHaz/WeatherApp-Fintek.git
   cd WeatherApp-Fintek
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
   npm run dev
   The app should now be running at http://localhost:3000.</code></pre>
<h2>Usage</h2>
<ol>
    <li>Open the app in your browser.</li>
    <li>Enter a city name in the search field.</li>
    <li>Click the 'Check' button to fetch and display weather information for the city.</li>
</ol>

<h2>Created</h2>
<p>This app was created by Jonathan Hazan as an entry test for Fintek Digital</p>
</body>
</html>
