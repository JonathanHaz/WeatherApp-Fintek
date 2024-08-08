import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/form.module.css';

export default function Form({ setWeatherData }) {
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError('');
    if (!cityName.trim()) {
      setError('Please enter a city name');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/weather`, {
        params: {
          q: cityName,
        },
      });

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('City not found');
    }
  };

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleFormSubmit}>
        <label htmlFor="cityName">City name</label>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            placeholder='Enter city name' 
            value={cityName} 
            onChange={(e) => setCityName(e.target.value)} 
            style={error ? {border: '1px solid red'} : {border: "none"}}
          />
          <button type="submit">Check</button>
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
    </>
  );
}
