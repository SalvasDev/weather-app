import React, { useState, useEffect, useContext } from 'react'
import Btnplace from './Btnplace';
import LocContext from './context/LocContext'
import axios from 'axios';
import styled from '@emotion/styled'



const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--bluedark);

        @media (max-width: 510px) {
            height: 100vh;
        }
   

    .cancel {
        border: none;
        display: flex;
        background-color: transparent;
        color: var(--lightgray);
        margin-top: 2rem;
        margin-left: auto;
        margin-right: 5rem;
        
        @media (max-width: 450px) {
        margin-right: 1rem;
        }
    }

    .material-symbols-rounded {
        font-size: 3.2rem;
        font-variation-settings:
        'FILL' 0,
        'wght' 700,
        'GRAD' 0,
        'opsz' 48
    }

    .search {
        margin-right: 5rem;
        margin-top: 4.5rem;

        @media (max-width: 450px) {
        margin-right: 1rem;
        }
    }

    .inpsearch {
        margin-left: 5rem;
        background-color: transparent;
        border: 1px solid #E7E7EB;
        width: 60%;
        height: 4.8rem;
        margin-right: 1rem;
        padding-left: 4rem ;
        color: var(--lightgray);
        font-family: 'Raleway', sans-serif; 
        font-size: 1.6rem;
    
        &::placeholder {
            color: var(--midgray);
            font-family: 'Raleway', sans-serif; 
            font-size: 1.6rem;
        }

        @media (max-width: 450px) {
            margin-left: 1rem;
            padding-left: 2rem;
            width: 65%
            
        }

    }

    .zoom {
        position: absolute;
        margin-left: -24.5rem;
        margin-top: 1rem;
        font-size: 2.4rem;
        color: var(--midgray);

          @media (max-width: 450px) {
            display:none
        }
    }

    .btnsearch {
        border: none;
        background-color: var(--blueg);
        font-family: 'Raleway', sans-serif; 
        color: white;
        height: 4.8rem;
        width: 25%;
        cursor: pointer;
        font-size: 1.6rem;

        &:hover {
            background-color: #666ee7;
        }

           @media (max-width: 450px) {
            width: 27%            
        }
    }

    .error {
        color: #EA8282;
        border-radius: 12px;;
        margin-left: 5rem;
        margin-bottom: 2rem;
        
    }
    .list__cities {
        margin-top: 4rem;
    }


`;



const Searchbar = ({ setShowbar, setShowaside }) => {

    // Form state

    const { location, setLocation } = useContext(LocContext)

    const [error, setError] = useState(false)
    const [consult, setConsult] = useState(false)
    const [places, setPlaces] = useState([])


    // Hide the searchbar
    const handleClose = e => {
        e.preventDefault()
        setShowbar(false)
        setShowaside(true)
    }
  
    

    useEffect(() => {
        setShowaside(false)
    }, [])



    // Function for set items into state
    const handleChange = e => {
        setLocation(e.target.value)
    }


    // When user click subtmit on form
    const handleSubmit = e => {
        e.preventDefault()
        if (location.trim() === '') {
            setError(true)
            return;
        }
        setError(false)
        setConsult(true)
    }




    // Calling the api to get similar cities when consult change
    useEffect(() => {

        const loadPlaces = async (location) => {
            var groupCities = []

            if (consult) {
                const key = process.env.REACT_APP_KEY
                const baseCities =  process.env.REACT_APP_BASECITIES
                const query = `?apikey=${key}&q=${location}`
                const response = await axios.get(baseCities + query)



                for (let i = 0; (groupCities.length < 9); i++) {


                    if (groupCities.length === 0) {
                        groupCities.push(response.data[i])

                        setPlaces(groupCities)
                        setConsult(false)

                    } else {
                        if (groupCities[i - 1].AdministrativeArea.ID !== response.data[i].AdministrativeArea.ID) {
                            groupCities.push(response.data[i])
                        } 
                    }
                    if (groupCities.length === response.data.length) {
                        return
                    }
                    setPlaces(groupCities)
                    setConsult(false)

                }

                setPlaces(groupCities)
                setConsult(false)
            }

        }
        loadPlaces(location)

    }, [consult])




    var i = 0;

    return (

        <Container>
            {/* button close */}
            <button onClick={e => { handleClose(e) }} className="cancel"><span className="material-symbols-rounded">close </span></button>
            <div className="search">
                {error ? <p className="error">Please enter a value</p> : null}
                <form
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name='location'
                        id={location}
                        placeholder='Search location'
                        onChange={handleChange}
                        className="inpsearch"
                    />
                    <span className="material-symbols-rounded zoom"> search </span>
                    <button type='submit' value='Search location' name="location" className="btnsearch">Search</button>
                </form>

                <div className="list__cities">
                    {places.slice(0, 5).map((place) => {
                        i = i + 1

                        var { AdministrativeArea, Country, LocalizedName, Key } = places[i - 1] || {}

                        if (places[0] !== undefined) {
                            return <Btnplace
                                key={Key}
                                state={AdministrativeArea?.LocalizedName}
                                country={Country?.LocalizedName}
                                cityName={LocalizedName}
                                idd={Key}
                                setShowaside={setShowaside}
                                setShowbar={setShowbar}

                            />
                        } else {
                            return <p className="error">City not founded</p>
                        }
                    })

                    }

                </div>
            </div>
        </Container>
    )
}

export default Searchbar















