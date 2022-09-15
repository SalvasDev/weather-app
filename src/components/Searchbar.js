import React, { useState, useEffect } from 'react'
// import { CSSTransition, SwitchTransition} from 'react-transition-group';
import { useCities } from './hooks/useCities';
import styled from '@emotion/styled'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--bluedark);




    .cancel {
        border: none;
        display: flex;
        background-color: transparent;
        color: var(--lightgray);
        margin-top: 2rem;
        margin-left: auto;
        margin-right: 5rem;
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

    }

    .zoom {
        position: absolute;
        margin-left: -24.5rem;
        margin-top: 1rem;
        font-size: 2.4rem;
        color: var(--midgray);
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
    }

    .error {
        color: var(--lightgray);
        margin-left: 5rem;
        margin-bottom: 2rem;
    }


`;



const Searchbar = ({setShowbar}) => {

    // Form state
    const [ location, setLocation ] = useState('')
    const [ error, setError ] = useState(false)
    const [ consult, setConsult ] = useState(false)
    // const { cities } = useCities(location, consult, setConsult)

    const [ places, setPlaces ] = useState ([])
    const [ placeMatch, setPlaceMatch ] = useState([])
    


    // Hide the searchbar
    const handleClose = e => {
        e.preventDefault()
        setShowbar(false)
    }
///////////////////////////////
    
    



    // Function for set items into state
    const handleChange = e => {     
        setLocation(e.target.value)
    }


    // When user click subtmit on form
    const handleSubmit = e => {
        e.preventDefault()
        if (location.trim()==='') {
            setError(true)
            return;
        }
        setError(false)
        setConsult(true)
    }
    
    
    
    
    
    

    const key = 'xlrN7OIuIl0VMtnIjjFBnDhKBVT7g0xM'


    const loadPlaces = async (location) => {

        console.log(location)

        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
        const query = `?apikey=${key}&q=${location}`
        const response = await fetch(base + query)
        const data = await response.json();
        setPlaces(data)
        console.log(places[0])

        setConsult(false)
    }
    


    useEffect(( ) => {
        loadPlaces(location)
        // loadPlaces(location).then(data => console.log(data)).catch(err => console.log(err))
    }, [consult]) 




 







    // For the complete
    // const searchPlaces = (text) => {
    //     let matches = places.filter((location) => {
    //         const regex = new RegExp(`${text}`, 'gi')
    //         return location.name.match(regex) || country.capital.match(regex)
    //     })
    // }



    




  return (

    <Container>
    {/* button close */}  
    <button onClick={ e => { handleClose(e) } } className="cancel"><span className="material-symbols-rounded">close </span></button>
    <div className="search">
        {error ? <p className="error">Please enter a value</p> : null}
        <form
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                name='location'
                id = {location}
                placeholder='Search location'
                onChange={handleChange}
                // onChange={(e) => searchPlaces(e.target.value)}
                className="inpsearch"
            />         
             <span className="material-symbols-rounded zoom"> search </span>  
            <button type='submit' value='Search location' name="location" className="btnsearch">Search</button>
        </form>
    </div>
    </Container>

  )
}

export default Searchbar


    //   <SwitchTransition>
    //     <CSSTransition classNames="fade" key='searchbar' addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>

    //         { showbar ? <Searchbar setShowbar={setShowbar}/> : null}

    //     </CSSTransition>
    //   </SwitchTransition>




//   .fade-enter{
//    opacity: 0;
// }
// .fade-exit{
//    opacity: 1;
// }
// .fade-enter-active{
//    opacity: 1;
// }
// .fade-exit-active{
//    opacity: 0;
// }
// .fade-enter-active,
// .fade-exit-active{
//    transition: opacity 500ms;
// }
// `;


    /* margin-left: -100%; */
    /* transition: all 3s ease-in-out; */
    /* transform: translateX(100%); */