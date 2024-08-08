import React from 'react';
import styles from '../styles/weathercard.module.css';

export default function WeatherCard({ weatherData }) {
  if (!weatherData) {
    return <div ></div>;
  }

  const {
    city,
    country,
    date,
    hour,
    temperature,
    condition,
    precipitation,
    humidity,
    wind,
    hourlyForecast,
  } = weatherData;

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.weatherCard}>
        <div className={styles.location}>
          <h2>{city}</h2>
          <p>{country}</p>
          <p>{date} at {hour}:00</p>
        </div>
        <div className={styles.temperature}>
          <span >{Math.floor(temperature)}<span style={{color : "#EFEFEF"}}>°</span></span>
          <p>{condition}</p>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <span>precipitation</span>
            <p>{precipitation} mm</p>
          </div>
          <div className={styles.detail}>
            <span>humidity</span>
            <p>{humidity}%</p>
          </div>
          <div className={styles.detail}>
            <span>wind</span>
            <p>{wind} km/h</p>
          </div>
        </div>
        <div className={styles.hourlyForecast}>
          {hourlyForecast.map((hour, index) => (
            <div className={styles.hour} key={index}>
              <p className={styles.time}>{hour.time}</p>
              <p style={{color : "#EFEFEF"}}>{Math.floor(hour.temp)}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
