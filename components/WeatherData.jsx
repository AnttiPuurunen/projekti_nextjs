import React from 'react'
import convertUtcToLocalTime from '@/utils/utcToLocalTime'

const WeatherData = ({ dataUpdated, temperature, tempUnit, roadTemp }) => {

  return (
    <div>
        <p>Säätiedot päivitetty: {convertUtcToLocalTime(dataUpdated)}</p>
        <p>Ilman lämpötila: {temperature} {tempUnit} </p>
        <p>Tien lämpötila: {roadTemp} {tempUnit}</p>
    </div>
  )
}

export default WeatherData