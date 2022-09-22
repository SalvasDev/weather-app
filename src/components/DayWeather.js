import React from 'react'
import Clear from '../img/Clear.png'
import Hail from '../img/Hail.png'
import HeavyRain from '../img/HeavyRain.png'
import LightCloud from '../img/LightCloud.png'
import LightRain from '../img/LightRain.png'
import Sleet from '../img/Sleet.png'
import Snow from '../img/Snow.png'
import Shower from '../img/Shower.png'
import HeavyCloud from '../img/HeavyCloud.png'
import Thunderstorm from '../img/Thunderstorm.png'
import styled from '@emotion/styled'


const Contday = styled.div`
        width: 100%;
        height: 17.7rem;
        background-color: var(--bluedark);
        display: flex;
        flex-direction: column;
        color: var(--lightgray);
        align-items: center;


        .row_maxmin {
            display: flex;
            justify-content: space-between;
            column-gap: 1.6rem;
        }

        .min {
            color:  var(--midgray)
        }
        
        .day {
            margin-top: 1.8rem;
        }

        .imgday {
            height: 40%;
        }

`;


const DayWeather = ({min, max, titleDate, WeatherIcon, sufijTemp}) => {

var icon;

if ( (WeatherIcon > 0 && WeatherIcon < 4) || (WeatherIcon > 29 &&  WeatherIcon < 31 ) || (WeatherIcon > 32 && WeatherIcon < 35) ) {
     icon = Clear 
  } else if ( (WeatherIcon > 3 && WeatherIcon < 6) || (WeatherIcon > 20 && WeatherIcon < 22) || (WeatherIcon > 34 && WeatherIcon < 37) ) {
     icon = LightCloud
  } else if ( (WeatherIcon > 5  && WeatherIcon < 11)  || (WeatherIcon > 18  && WeatherIcon < 21) || (WeatherIcon > 31  && WeatherIcon < 33) || (WeatherIcon > 36  && WeatherIcon < 39) || (WeatherIcon > 42 && WeatherIcon < 44)) {
    icon = HeavyCloud 
  } else if ( (WeatherIcon > 11 && WeatherIcon < 13) || (WeatherIcon > 39 && WeatherIcon < 41) )  {
    icon = Shower
  } else if ( (WeatherIcon > 12 && WeatherIcon < 15) || (WeatherIcon > 38 && WeatherIcon < 40 ) ) {
    icon = LightRain 
  } else if ( (WeatherIcon > 14 && WeatherIcon < 18) || (WeatherIcon > 40 && WeatherIcon < 43 ) ) {
    icon = Thunderstorm 
  } else if ( WeatherIcon > 17 && WeatherIcon < 19 ) {
    icon = HeavyRain 
  } else if ( (WeatherIcon >23 && WeatherIcon < 25) || (WeatherIcon  > 30 && WeatherIcon < 32 ) ){
    icon = Snow 
  } else if ( WeatherIcon > 24 && WeatherIcon < 26 ) {
    icon = Sleet
  } else if ( (WeatherIcon > 25 && WeatherIcon < 30) || (WeatherIcon > 43 && WeatherIcon < 45 ) ){
    icon = Hail
   return
  }     

  return (
    <Contday>
        <p className="day">{titleDate}</p>
        <img className="imgday" src={icon} alt="" />
        <div className="row_maxmin">
            <p className="max">{max}<span className="type_grades">&ordm;{sufijTemp}</span></p>
            <p className="min">{min}<span className="type_grades">&ordm;{sufijTemp}</span></p>
        </div>      
    </Contday>
  )
}

export default DayWeather

