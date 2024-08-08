import { useState } from 'react';
import Logo from './assets/logo.svg';
import './styles/App.css';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="leftPanel">
          <header className="header">
            <img src={Logo} alt="Fintek Digital Logo"/>
          </header>
          <div className='description'><p>Use our weather app to see the weather around the world</p></div>
          <div className='searchContainer'>
            <form className="searchForm">
              <label htmlFor="cityName">City name</label>
              <div className='inputContainer'>
                <input type="text" id="cityName" name="cityName" value="Tel Aviv"/>
                <button type="submit">Check</button>
              </div>
            </form>
          </div>
          <div className="coordinates">
            <p>latitude 32.07 &nbsp;&nbsp; longitude 34.76</p>
            <p>accurate to 13/02/2022 at 16:24</p>
          </div>
        </div>
        <div className="rightPanel">
          <WeatherCard/>
        </div>
      </div>
    </div>
  );
}

export default App;
