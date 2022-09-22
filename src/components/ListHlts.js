import React, { useContext } from 'react'
import CurrentContext from './context/CurrentContext'
import Hlt from './Hlt'
import styled from '@emotion/styled'

const ContList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
    column-gap: 3rem;
    row-gap: 3rem;
    
    @media (max-width: 810px) {
      margin-right: 2rem;
    }

    @media (max-width: 510px) {
      width: 100%            
     }
`;


const ListHlts = () => {

  const { weather } = useContext(CurrentContext)
  
  var { WindGust, Wind, RelativeHumidity, Visibility, Pressure } = weather || {} 

    

  return (
    <ContList>
        <Hlt titlehlt = 'Wind status' textresult={Math.round(WindGust?.Speed?.Imperial?.Value)} typemeassure='mph' direction = {Wind?.Direction?.Localized}/>
        <Hlt titlehlt = 'Humidity' textresult={RelativeHumidity} typemeassure='%' porcentClass = {RelativeHumidity}/>
        <Hlt titlehlt = 'Visibility' textresult={Visibility?.Imperial?.Value} typemeassure='miles'/>
        <Hlt titlehlt = 'Air Pressure'textresult= {Math.round(Pressure?.Metric?.Value)} typemeassure='mb'/>
    </ContList>
  )
}

export default ListHlts


