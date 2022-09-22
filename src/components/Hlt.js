import React from 'react'
import styled from '@emotion/styled'



const Conthlt = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: var(--bluedark);
        color: var(--lightgray);
        align-items: center;
        
        .titleclass {
            margin-top: 1.8rem;
        }

        .result {
            margin-top: .5rem;
            font-size: 64px;
            font-weight: 700; 
            margin-bottom: 3rem;
        }

        .measure {
            font-size: 36px;
            font-weight: 400;
            vertical-align: middle;
        }

        .iconnear {
            display: flex;
            background-color: var(--grayblue);
            color: var(--lightgray);
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 100%;
            font-weight: 700;
            font-size: 1.8rem;
            align-items: center;
            justify-content: center;

         }

        .material-symbols-rounded {
            transform: rotate(170deg);
        }

        .locnear {
            display: flex ;
            column-gap: 1rem;
            align-items: center;
            margin-top: -2rem;
            margin-bottom: 3rem;

        }

        .loctext {
            font-size: 1.6rem;
            color: lightgray;
            font-weight: 500;
        }
        .progress_bar {
            width: 70%;
            margin-right: auto;
            margin-left: auto;
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
        }

        .groupniv {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: -2rem;

        }

        .nivporc {
            font-size: 12px;
        }

        .bar {
            width: 100%;
            height: 8px;
            background-color: var(--lightgray);
            border-radius: 8px;

        }  

        .porcent {
            margin-right: 0;
            margin-left: auto;
        }
`;




const Hlt = ({titlehlt, textresult, typemeassure, direction, porcentClass }) => {


  return (
    <Conthlt>
        <p className="titleclass">{titlehlt}</p>
        <h3 className="result">{textresult} <span className="measure">{typemeassure}</span></h3>
        { titlehlt === 'Wind status' ?
        <div className="locnear">
            <div className="iconnear"><span className="material-symbols-rounded"> near_me </span></div>
            <h3 className="loctext">{direction}</h3>
        </div>
        : null}
        
        { titlehlt === 'Humidity' ?
        <div className="progress_bar">
            <div className="groupniv">
                <p className="nivporc">0</p>
                <p className="nivporc">50</p>
                <p className="nivporc">100</p>
            </div>
            <div className="bar">
                <div style={{ width: `${porcentClass}%`,
                    height: '100%', 
                    backgroundColor: '#FFEC65', 
                    borderRadius: '8px' }}> 
                </div>
            </div>
            <p className="nivporc porcent">%</p>
        </div>

        : null }
    </Conthlt>
  )
}

export default Hlt
