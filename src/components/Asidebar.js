import React, { useEffect, useContext, useState } from 'react'
import './asidebar.css'
import CurrentContext from './context/CurrentContext'
import LocContext from './context/LocContext'
import TypeWeContext from './context/TypeWeContext'
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


const Container = styled.div`
    background-color: var(--bluedark);
    height: 100%;


      @media (max-width: 510px) {
            height: 100%;
        }

    .row_search {
        display: flex;
        width: 100%;
        align-content: center;
        margin-top: 4.2rem;
        justify-content: space-between;
    }

    .btn_search {
        width: 161px;
        height: 40px;
        margin-left: 4.6rem;
        background-color: var(--grayblue);
        color: white;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        &:hover {
          background-color: #94959a;
        }
        
    }
    .btncross_search {
      margin-right: 4.6rem;
      margin-left: auto;
      background-color: var(--grayblue);
      color: white;
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      
      &:hover {
          background-color: #94959a;
        }


    }
    .bigicon_weather {
      width: 20rem;
      margin-top: 12rem;
    }

    .biggrades_weather {
      font-size: 120px;
      color: var(--lightgray);
      font-weight: 500;
      margin-top: 10rem;
      margin-bottom: 5rem;
    }

    .type_grades {
      color: var(--midgray);
      font-weight: 400;
      font-size: 4.8rem;
    }

    .type_weather {
      font-weight: 500;
      color: var(--midgray);
      font-size: 3.6rem;
      margin-top: 0;
    }
    
    .today_date {
      color: var(--midgray);
      margin-top: 5rem;

      span {
        margin-left: .5rem;
        margin-right: .5rem;
        font-weight: 700;
        font-size: 1.8rem;
      }
    }

    .location {
      display: flex;
      color: var(--midgray);
      font-size: 1.8rem;
      vertical-align: middle;
      margin-bottom: 7rem;
      text-transform: capitalize;

      .material-symbols-rounded {
        justify-self: center;
        margin-right: .8rem;
      }
    }
`;



const Asidebar = ({ setShowbar, setShowaside, handleForce, coordenades }) => {

  const [tempLocation, setTempLocation] = useState('')

  const { consult2, dataConsult, setDataConsult, weather, setWeather, setWeathFive } = useContext(CurrentContext)
  const { location } = useContext(LocContext)
  const { typeweather } = useContext(TypeWeContext)




  useEffect(() => {
    setShowaside(true)
  }, [])


  /////////////////////




  var defaultLoc = 0

  if (!dataConsult) {
    defaultLoc = 623
  } else {
    defaultLoc = dataConsult
  }


  // Getting the current weeather with details and the 5 next days


  useEffect(() => {
    // If we have coords then make a special query with a coords
    if (coordenades) {
      if (consult2) {

        const getCurrentCoords = async (coordenades) => {
          var { lat, lng } = coordenades

          var lat2 = parseFloat(lat)
          var lng2 = parseFloat(lng)

          const key = process.env.REACT_APP_KEY
          const baseCoords = process.env.REACT_APP_BASECOORDS
          const query = `?apikey=${key}&q=${lat2},${lng2}`

          const response = await fetch(baseCoords + query)

          const dataCurrent = await response.json()

          setTempLocation(dataCurrent.LocalizedName)
          return dataCurrent.Key
        }

        // Set the weather with key founded with coords
        getCurrentCoords(coordenades).then(dataCurrent => { setDataConsult(dataCurrent) })


        const getCurrentW = async ({ dataConsult = defaultLoc } = []) => {

          const key = process.env.REACT_APP_KEY
          const base = process.env.REACT_APP_BASECURR
          const query = `${dataConsult}?apikey=${key}&details=true`

          const response = await fetch(base + query)
          const dataCurrent = await response.json()

          return dataCurrent[0]
        }

        getCurrentW(dataConsult).then(dataCurrent => { setWeather(dataCurrent) })
      }

    } else if (!coordenades) {

      // If dont have coords then consult with a default city

      const getCurrentW = async ({ dataConsult = defaultLoc } = [], consult2) => {

        if (consult2) {
          const key = process.env.REACT_APP_KEY
          const base = process.env.REACT_APP_BASECURR
          const query = `${dataConsult}?apikey=${key}&details=true`

          const response = await fetch(base + query)
          const dataCurrent = await response.json()
          return dataCurrent[0]
        }

      }

      getCurrentW(dataConsult, consult2).then(dataCurrent => { setWeather(dataCurrent) })

    }


    // Consult to five days forecast weather
    const getFive = async ({ dataConsult = defaultLoc } = []) => {

      const key = process.env.REACT_APP_KEY
      const basefived = process.env.REACT_APP_BASEFIVED
      const query = `${dataConsult}?apikey=${key}`

      const response = await fetch(basefived + query)
      const data = await response.json()

      return data.DailyForecasts

    }
    getFive(dataConsult).then(fivedays => { setWeathFive(fivedays) })



  }, [dataConsult])





  /////////////////////////////////////////////////////

  const handleClick = (e) => {
    e.preventDefault()
    setShowaside(false)
    setShowbar(true)

  }


  const handleSubmit = () => {
    handleForce()
  }



  var icon = 0;
  var temp = 0;
  var sufijTemp = '';

  var { WeatherIcon, WeatherText, Temperature } = weather || {}


  if (typeweather === 'C') {
    temp = Math.floor(Temperature?.Metric?.Value)
    sufijTemp = 'C'
  } else if (typeweather === 'F') {
    temp = Math.floor(Temperature?.Imperial?.Value)
    sufijTemp = 'F'
  }



  if ((WeatherIcon > 0 && WeatherIcon < 4) || (WeatherIcon > 29 && WeatherIcon < 31) || (WeatherIcon > 32 && WeatherIcon < 35)) {
    icon = Clear
  } else if ((WeatherIcon > 3 && WeatherIcon < 6) || (WeatherIcon > 20 && WeatherIcon < 22) || (WeatherIcon > 34 && WeatherIcon < 37)) {
    icon = LightCloud
  } else if ((WeatherIcon > 5 && WeatherIcon < 11) || (WeatherIcon > 18 && WeatherIcon < 21) || (WeatherIcon > 31 && WeatherIcon < 33) || (WeatherIcon > 36 && WeatherIcon < 39) || (WeatherIcon > 42 && WeatherIcon < 44)) {
    icon = HeavyCloud
  } else if ((WeatherIcon > 11 && WeatherIcon < 13) || (WeatherIcon > 39 && WeatherIcon < 41)) {
    icon = Shower
  } else if ((WeatherIcon > 12 && WeatherIcon < 15) || (WeatherIcon > 38 && WeatherIcon < 40)) {
    icon = LightRain
  } else if ((WeatherIcon > 14 && WeatherIcon < 18) || (WeatherIcon > 40 && WeatherIcon < 43)) {
    icon = Thunderstorm
  } else if (WeatherIcon > 17 && WeatherIcon < 19) {
    icon = HeavyRain
  } else if ((WeatherIcon > 23 && WeatherIcon < 25) || (WeatherIcon > 30 && WeatherIcon < 32)) {
    icon = Snow
  } else if (WeatherIcon > 24 && WeatherIcon < 26) {
    icon = Sleet
  } else if ((WeatherIcon > 25 && WeatherIcon < 30) || (WeatherIcon > 43 && WeatherIcon < 45)) {
    icon = Hail
    return
  }

  var today = new Date()
  var month = today.toDateString()
  var day = today.getDate()
  var dayStr = month.substring(0, month.length - 12)
  var monthStr = month.substring(4, month.length - 7)


  const actualLocation = location ? location : tempLocation ? tempLocation : 'Paris'

  return (
    <Container>
      <div className="aside__bar">
        <div className='row_search'>
          <button onClick={e => { handleClick(e) }} className="btn_search">Search for places</button>

          <button onClick={() => handleSubmit()} className="btncross_search">
            <span className="material-symbols-rounded">my_location</span>
          </button>
        </div>

        {/* Bing icon central */}
        <img className="bigicon_weather" src={icon} alt="Cloud and son" />
        <h1 className="biggrades_weather">{temp}<span className="type_grades">&ordm;{sufijTemp}</span> </h1>
        <h2 className="type_weather">{WeatherText}</h2>

        {/* Date */}

        <p className="today_date">Today <span> &#183; </span>  {dayStr}, {day} {monthStr} </p>
        <p className="location"><span className="material-symbols-rounded"> location_on </span>{actualLocation}</p>

      </div>

    </Container>
  )
}

export default Asidebar


