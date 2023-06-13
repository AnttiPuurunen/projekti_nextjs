"use client";

import React, { useState, useEffect } from 'react';
import convertUtcToLocalTime from 'utils/utcToLocalTime';
import WeatherData from './WeatherData';

const RoadDetailsById = ({ id }) => {

  const [weatherCam, setWeatherCam] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherCamById = async (id) => {

    try {
      const response = await fetch("https://tie.digitraffic.fi/api/weathercam/v1/stations/" + id);
      
      if (!response.ok) {
        console.log("Tapahtui virhe: " + response.status);
      }
      
      const data = await response.json();
      console.log(data);
  
      setWeatherCam(data.properties);
    } catch (error) {
      console.log("Tapahtui virhe: " + error);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch("https://tie.digitraffic.fi/api/weather/v1/stations/" + weatherCam.nearestWeatherStationId + "/data");
      
      if (!response.ok) {
        console.log("Tapahtui virhe: " + response.status);
      }
      
      const data = await response.json();
      console.log("weatherData: " + data);
  
      setWeatherData(data);
    } catch (error) {
      console.log("Tapahtui virhe: " + error);
    }
  };

  useEffect(() => {
    if (id !== null && id !== undefined) fetchWeatherCamById(id);
  }, []);

  useEffect(() => {
    if (weatherCam !== null && weatherCam !== undefined) fetchWeatherData();
  }, [weatherCam]);

  return (
    <div>
      {weatherCam ?
        <div className='weathercam_search_results'>
          <p>Kameran sijainti: {weatherCam.names.fi}</p>
          <br />
          <p>Kameran tiedot päivitetty: {convertUtcToLocalTime(weatherCam.dataUpdatedTime)}</p>
          <p>Kameran viimeisimmät kuvat eri suuntiin:</p>
          <ul>
          {weatherCam.presets.map((item) => 
            <li key={item.id} className='camera_pic_link'><a href={item.imageUrl}>{item.presentationName}</a></li>)}
          </ul>
          <br />
          {weatherData ? 
          <WeatherData 
          dataUpdated={weatherData.dataUpdatedTime}
          temperature={weatherData.sensorValues[0].value}
          tempUnit={weatherData.sensorValues[0].unit} 
          roadTemp={weatherData.sensorValues[2].name === "TIE_1" ? weatherData.sensorValues[2].value : "Ei tietoja"}/> : <p>Ei säätietoja saatavilla</p>}
        </div> : <p>Ei tietoja</p>
      }
    </div>
  )
}

export default RoadDetailsById