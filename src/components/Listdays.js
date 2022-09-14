import React from 'react'
import Day from './Day'
import styled from '@emotion/styled'

const Listclass = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: 6rem;
`; 

const Listdays = () => {
  return (
    <Listclass>
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </Listclass>
  )
}

export default Listdays
