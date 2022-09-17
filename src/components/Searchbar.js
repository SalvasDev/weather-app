import React, { useState, useEffect } from 'react'
import Btnplace from './Btnplace';
import { useCities } from './hooks/useCities';
import axios from 'axios';
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
        color: #EA8282;
        border-radius: 12px;;
        margin-left: 5rem;
        margin-bottom: 2rem;
        
    }
    .list__cities {
        margin-top: 4rem;
    }


`;



const Searchbar = ({setShowbar, setShowaside}) => {

    // Form state
    const [ location, setLocation ] = useState('')
    const [ error, setError ] = useState(false)
    const [ consult, setConsult ] = useState(false)
    const [ consult2, setConsult2] = useState(false)
    const [ dataConsult, setDataConsult ] = useState('') 
    const [ places, setPlaces ] = useState ([])
    const { cities } = useCities( dataConsult, consult2, setConsult2 )
    

    console.log(`Esto trae cities segun la fecha ${cities}`)

    useEffect(() =>{
        setShowaside(false)
    },[])


    // Hide the searchbar
    const handleClose = e => {
        e.preventDefault()
        setShowbar(false)
        setShowaside (true)
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


    
       
    // Calling the api to get similar cities when consult change
    useEffect(( ) => {

        const loadPlaces = async (location) => {
                var groupCities = []
    
            if (consult) {
                const key = 'xlrN7OIuIl0VMtnIjjFBnDhKBVT7g0xM'

                const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
                const query = `?apikey=${key}&q=${location}`
                const response = await axios.get(base + query)
                


                for ( let i = 0; (groupCities.length < 6) ; i++ ) {               
                    

                    if (groupCities.length === 0 ) {
                        groupCities.push(response.data[i])

                        setPlaces(groupCities)
                        setConsult(false)

                     } else {
                        if (groupCities[i-1].AdministrativeArea.ID !== response.data[i].AdministrativeArea.ID ) {
                           groupCities.push(response.data[i])
                        } else {
                            return
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

         <div className="list__cities">
            { places.slice(0, 5).map((place) => {
                i = i + 1                
                   
                    var { AdministrativeArea, Country, LocalizedName, Key } = places[i-1] || {}                   

                    if (places[0] !== undefined ) {
                    return  <Btnplace 
                    key = {Key}
                    state = {AdministrativeArea?.LocalizedName} 
                    country = {Country?.LocalizedName} 
                    cityName = {LocalizedName} 
                    idd = {Key}
                    setConsult2 = {setConsult2}
                    setDataConsult = {setDataConsult}
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



    // for ( let i = 1; i <= 5; i++ ) {
               
            
    //         if ((resultado.data[numAleat] !== undefined) && (resultado.data[numAleat].capital !== []) && (resultado.data[numAleat].capital))  {
    //             countGroup.push(resultado.data[numAleat])                
    //         } else {
    //             return   
    //         }


                  // if (!groupCities.includes(response.data[i].AdministrativeArea.ID)) {
                    //     groupCities.push(response.data[i])
                    //     console.log(groupCities)
                    // } else {
                    //     return
                           
                    // }               
                // }
            // console.log(groupCities)





            /////AUTO COMPLETE ///////
    // const [ placeMatch, setPlaceMatch ] = useState([])

             

// console.log(places[0])

    // For the complete
    // const searchPlaces = (text) => {
    //     let matches = places.filter((location) => {
    //         const regex = new RegExp(`${text}`, 'gi')
    //         return location.name.match(regex) || country.capital.match(regex)
    //     })
    // }

//   let { AdministrativeArea, Country, LocalizedName } = places[0] || {}
// console.log(LocalizedName + AdministrativeArea?.LocalizedName + Country?.LocalizedName)