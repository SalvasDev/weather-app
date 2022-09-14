import React from 'react'
import Hlt from './Hlt'
import styled from '@emotion/styled'

const ContList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
    column-gap: 3rem;
    row-gap: 3rem;
    
`;


const ListHlts = () => {
  return (
    <ContList>
        <Hlt titlehlt = 'Wind status' textresult='7' typemeassure='mph'/>
        <Hlt titlehlt = 'Humidity' textresult='84' typemeassure='%'/>
        <Hlt titlehlt = 'Visibility'textresult='6.4' typemeassure='miles'/>
        <Hlt titlehlt = 'Air Pressure'textresult='998' typemeassure='mb'/>
    </ContList>
  )
}

export default ListHlts


