import React, { useState } from 'react'
import './asidebar.css'
import Searchbar from './Searchbar'
import shower from '../img/Shower.png'
import styled from '@emotion/styled'

const Container = styled.div`
    background-color: var(--bluedark);

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
      margin-top: 3rem;
    }
    
    .today_date {
      color: var(--midgray);
      margin-top: 5rem;
    }

    .location {
      display: flex;
      color: var(--midgray);
      font-size: 1.8rem;
      vertical-align: middle;
      margin-bottom: 7rem;

      .material-symbols-rounded {
        justify-self: center;
        margin-right: .8rem;
      }
    }
`;




const Asidebar = () => {

  const [ showbar, setShowbar ] = useState(false)


  const handleClick = (e) => {
    e.preventDefault()
    setShowbar(true)
  }


  return (
    <Container>

      { showbar ? <Searchbar setShowbar={setShowbar}/> : null}

        <div className="aside__bar">
            <div className= 'row_search'>
              <button onClick={ e => { handleClick(e) } } className="btn_search">Search for places</button>
                
                  <button className="btncross_search">
                    <span className="material-symbols-rounded">my_location</span>
                  </button>
            </div>

            {/* Bing icon central */}
            <img className="bigicon_weather" src={shower} alt="Cloud and son" />
            <h1 className="biggrades_weather">15<span className="type_grades">&ordm;C</span> </h1>
            <h2 className="type_weather">Shower</h2>    

            {/* Date */}

            <p className="today_date">Today  -  Fri, 5 Jun</p>
            <p className="location"><span className="material-symbols-rounded"> location_on </span>Morelia</p>

        </div>

    </Container>
  )
}

export default Asidebar
