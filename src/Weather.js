import React, { useState } from 'react'
import axios from 'axios'

export default function Weather() {
  const [city, setCity] = useState();
  const handleCityChange = (event) => {
    setCity(event.target.value)
  }
  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=${city}&appid=${'f3a4d628a3e8c8ff46539b8172e42a80'}`)
      console.log(response)
    }
    catch {
      
    }
  }
  const handleClick = () => {
    fetchWeather();
  }
  return (
    <div className="weather-container">
      <input type='text' placeholder='Enter City Name' value={city} onChange={handleCityChange} />
      <button onClick={handleClick}>Get Weather</button>

    </div>
  )
}
