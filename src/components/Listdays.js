import React, {useContext} from 'react'
import DayWeather from './DayWeather'
import CurrentContext from './context/CurrentContext'
import TypeWeContext from './context/TypeWeContext'
import styled from '@emotion/styled'

const Listclass = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: 6rem;

        @media (max-width: 450px) {
            column-gap: 1rem;
        }
`; 

const Listdays = () => {

  const { typeweather } = useContext(TypeWeContext)
const { weathfive } = useContext(CurrentContext)


  var i = 0
  var titleDate = ''
  var tempMin
  var tempMax
  var sufijTemp = ''



  const listArray = ['A', 'B', 'C', 'D', 'E']
  return (
    <Listclass>
      { listArray.map((dayw) => {
            i = i + 1;            

              var { Day, Temperature,  } = weathfive[i-1] || {}

              let today =  new Date()
              today.setDate( today.getDate() + i)
              let day = today.getDate()
              let month = today.toDateString()
              let dayStr = month.substring(0, month.length - 12)
              let monthStr = month.substring(4, month.length - 7)

              var newdate = `${dayStr}, ${day} ${monthStr}` 
            
              i === 1 ? titleDate = 'Tomorrow' : titleDate = newdate  
              
              let tmin = Math.round(Temperature?.Minimum?.Value)
              let tmax = Math.round(Temperature?.Maximum?.Value)

              if (typeweather === 'F') {
                tempMin =  tmin
                tempMax =  tmax
                sufijTemp = 'F'
              }  else if ( typeweather === 'C' ) {
                tempMin =  Math.round((tmin- 32) * (5/9))
                tempMax = Math.round((tmax- 32) * (5/9))
                sufijTemp = 'C'
              }             

                return  <DayWeather 
                          key = {i.toString()}
                          titleDate = {titleDate}
                          WeatherIcon= {Day?.Icon}
                          min = {tempMin}
                          max = {tempMax}
                          sufijTemp = {sufijTemp}
                  />

          })
        } 


    </Listclass>
  )
}

export default Listdays

