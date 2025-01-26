import React, { useState } from 'react'
import axios from 'axios'

export default function Weather() {
  const [weather, setWeather] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const handleCityChange1 = (event) => {
    setLat(event.target.value)
  }

   const handleCityChange2 = (event) => {
    setLon(event.target.value)
  }
  
  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cac40f98bce4d7b73f28b48ce9081b89`)
      console.log(response);
      setWeather(response);
    }
    catch(error)
    {console.log("error in fetching data",error)
      
    }
  }
  const handleClick = () => {
    fetchWeather();
  }
  return (
    <div className="weather-container">
      <input type='text' placeholder='Enter Latitude' value={lat} onChange={handleCityChange1} />
      

      <input type='text' placeholder='Enter Longitude' value={lon} onChange={handleCityChange2} />


<button onClick={handleClick}>Get Weather</button>
    
    {
    weather && <>
      <div className="weather-info">
            <h3>{ weather.name}</h3>
      </div>
    </>
  }
</div>
  )
}
