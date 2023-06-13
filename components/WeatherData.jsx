import React from 'react'
import convertUtcToLocalTime from '@/utils/utcToLocalTime'

const WeatherData = ({ dataUpdated, temperature, tempUnit, roadTemp }) => {

  return (
    <div className='weatherdata_results'>
        <p>Säätiedot päivitetty: {convertUtcToLocalTime(dataUpdated)}</p>
        <p>Ilman lämpötila: {temperature} {tempUnit} </p>
        <p>Tien lämpötila: {roadTemp !== "Ei tietoja" ? roadTemp + " " + tempUnit : roadTemp}</p>
    </div>
  )
}

export default WeatherData