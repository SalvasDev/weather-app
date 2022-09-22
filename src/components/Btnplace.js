import React, {useContext} from 'react'
import CurrentContext from './context/CurrentContext'
import styled from '@emotion/styled'

const Btncity = styled.div`
    button {
        border: none;
        background-color: transparent;
        color: var(--lightgray);
        font-family: 500;
        font-family: 'Raleway', sans-serif;
        margin-left: 5rem;
        width: 86%;
        height: 64px;
        font-size: 1.6rem;
        text-align: left;
        padding-left: 1rem;
        padding-right: 1rem;
        &:hover {
            cursor: pointer;
            border: 1px solid #616475;
        }
    
    }  

`;


const Btnplace = ({state, country, cityName, idd, setShowaside, setShowbar}) => {

const { setConsult2, setConsult3, setDataConsult } = useContext(CurrentContext)
 

var cityToBtn = cityName + ', ' + state + ', ' + country 

const handleClick = (e, idd) => {
  e.preventDefault()
  
  setDataConsult(idd)
  setConsult2(true)
  setConsult3(true)
  setShowbar(false)
  setShowaside(true)
}
  
return (
    <Btncity>
      <button
      onClick = {e => handleClick(e, idd)}
      >
         {cityToBtn}
      </button>
    </Btncity>
  )
}

export default Btnplace


