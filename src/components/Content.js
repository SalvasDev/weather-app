import React, {useContext, useState} from 'react';
import TypeWeContext from './context/TypeWeContext'
import Listdays from './Listdays';
import ListHlts from './ListHlts';
import Footer from './Footer'
import styled from '@emotion/styled'


const Container = styled.div`
  width: min(95%, 704px);
  margin: 4.2rem auto 0 auto;
  display: flex;
  flex-direction: column;

  .btns_typegrad {
    display: flex;
    column-gap: 1rem;
    margin-left: auto;
    margin-right: 0;
  }

  .centigrade {
    background-color: var(--lightgray);
    color: var(--globalback);
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-weight: 700;
    font-size: 1.8rem;
    
    &:hover {
        background-color: #94959a;
      }

  }

  .farenheit {
    background-color: var(--grayblue);
    color: var(--globalback);
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-weight: 700;
    font-size: 1.8rem;
    
    &:hover {
        background-color: #94959a;
      }

  }
  .title_hlts {
    color: var(--lightgray);
    margin-top: 5rem;
    font-size: 2.4rem;
    font-weight: 500;

  }
`;


const Content = () => {

const { setTypeWeather } = useContext(TypeWeContext)


const handleClick = (e, type) => {
  e.preventDefault()
  setTypeWeather(type)
  
}



  return (
    <Container>
      <div className='btns_typegrad'>
        <button onClick={e => handleClick(e, 'C')} className="centigrade">&ordm;C</button>
        <button onClick={e => handleClick(e, 'F')} className="farenheit">&ordm;F</button>
      </div>
      <Listdays />
      <h2 className="title_hlts">Todays Hightlights </h2>
      <ListHlts />
      <Footer author='Salvador Sánchez'/>
    </Container>
  )
}

export default Content
