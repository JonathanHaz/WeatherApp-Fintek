import React from 'react'
import styles from '../styles/weathercard.module.css'

export default function WeatherCard() {
  return (
    <div className={styles.weatherContainer}>
       <div className={styles.weatherCard}>
        <div className={styles.location}>
                <h2>Tel Aviv</h2>
                <p>Israel</p>
                <p>13/2/22 at 16:00</p>
        </div>
                <div className={styles.temperature}>
                    <span>18°</span>
                    <p>sunny</p>
                </div>
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <p>precipitation</p>
                        <p>0 mm</p>
                    </div>
                     <div className={styles.detail}>
                        <p>humidity</p>
                        <p>53%</p>
                    </div>
                     <div className={styles.detail}>
                        <p>wind</p>
                        <p>28 km/h</p>
                    </div>
                </div>
                <div className={styles.hourlyForecast}>
                    <div>
                        <p>13:00</p>
                        <p>19°</p>
                    </div>
                    <div>
                        <p>14:00</p>
                        <p>20°</p>
                    </div>
                    <div>
                        <p>15:00</p>
                        <p>20°</p>
                    </div>
                    <div>
                        <p>16:00</p>
                        <p>18°</p>
                    </div>
                    <div>
                        <p>17:00</p>
                        <p>16°</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
