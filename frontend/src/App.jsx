import React, { useState } from 'react';
import Logo from './assets/logo.svg';
import './styles/App.css';
import WeatherCard from './components/WeatherCard';
import Form from './components/Form';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  console.log(weatherData);

  return (
    <div className="container">
      <div className="content">
        <div className="leftPanel">
          <header className="header">
            <img src={Logo} alt="Fintek Digital Logo"/>
          </header>
          <div className='description'><p>Use our weather app to see the weather around the world</p></div>
          <div className='searchContainer'>
            <Form setWeatherData={setWeatherData} />
          </div>
          {weatherData ? (
             <div className="coordinates">
             <p>latitude {weatherData.latitude} &nbsp;&nbsp; longitude {weatherData.longitude}</p>
             <p>accurate to {weatherData.date} at {weatherData.hour}:00</p>
           </div>
          ) : (
            <div className='coordinates'></div>
          )
           }
        </div>
        <div className="rightPanel">
          <WeatherCard weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
