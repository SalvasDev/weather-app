import { useState, useEffect } from 'react'
import getCities from '../../services/getCities'


export function useCities(dataConsult, consult2, setConsult2) {

    const [ cities, setCities ] = useState([])

    useEffect( () => { 
      getCities(dataConsult, consult2, setConsult2)
      .then(ciudades => {
        setCities(ciudades)
      })
    }, [consult2])


  return {cities}

}



