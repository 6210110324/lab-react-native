import React, { useState, useEffect } from 'react'
import Forecast from './Forcast'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
        })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=283c7de4392fec09821a7e06b3f95a16`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
                });
            }
        }, [props.zipCode])
    
    return (
        <View>
             <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
 )
}

const styles = StyleSheet.create({
    backdrop: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'

    },
   });
  

   