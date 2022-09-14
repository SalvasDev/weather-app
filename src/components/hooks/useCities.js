import { useState, useEffect } from 'react'
import getCities from '../../services/getCities'


export function useCities(location, consult, setConsult) {

    const [ cities, setCities ] = useState([])

    useEffect( () => { 
      getCities(location, consult, setConsult).then(cities => setCities(cities))

    }, [consult])

  return {cities}
    
}



