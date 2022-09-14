import React from 'react'
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
            width: 5.6rem;
        }

`;


const Day = () => {
  return (
    <Contday>
        <p className="day">Tomorrow</p>
        <img className="imgday" src={Thunderstorm} alt="" />
        <div className="row_maxmin">
            <p className="max">16<span className="type_grades">&ordm;C</span></p>
            <p className="min">12<span className="type_grades">&ordm;C</span></p>
        </div>      
    </Contday>
  )
}

export default Day

// Thunderstorm.png