import React, { useState } from 'react'
import ForecastS from './Forcast'


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
        }) 
    return (
        <Forecast {...forecastInfo} />
    )
   }
   