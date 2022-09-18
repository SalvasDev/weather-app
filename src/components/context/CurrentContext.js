import React, {useState} from 'react'

const Context = React.createContext({})

export function CurrentContextProvider ({children}) {
    const [ weather, setWeather ] = useState([])
    const [ consult2, setConsult2] = useState(false)
    const [ dataConsult, setDataConsult ] = useState('') 
    

    return (
    
    <Context.Provider value={{weather, setWeather, consult2, setConsult2, dataConsult, setDataConsult}}>
        {children}
    </Context.Provider>
    )

}


export default Context