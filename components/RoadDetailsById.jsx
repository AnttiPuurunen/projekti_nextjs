"use client";

import React, { useState, useEffect } from 'react'

const RoadDetailsById = ({ id }) => {

  const [weatherCam, setWeatherCam] = useState(null);

  const fetchWeatherCamById = async (id) => {
    const response = await fetch("https://tie.digitraffic.fi/api/weathercam/v1/stations/" + id);
    const data = await response.json();
    console.log(data);

    setWeatherCam(data.properties);
  };

  useEffect(() => {
    if (id !== null && id !== undefined) fetchWeatherCamById(id);
  }, []);

  return (
    <div>
      <p>{id}</p>
      {weatherCam ?
        <>
          <p>{weatherCam.names.fi}</p>
          <br />
          <p>Tiedot päivitetty: {weatherCam.dataUpdatedTime}</p>
        </> : <p>Ei tietoja</p>
      }
    </div>
  )
}

export default RoadDetailsById