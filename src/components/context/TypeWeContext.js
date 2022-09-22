import React, {useState} from 'react'

const Context = React.createContext({})

export function TypeWContextProvider ({children}) {
    const [ typeweather, setTypeWeather ] = useState('C')

    

    return (
    
    <Context.Provider value={{typeweather, setTypeWeather}}>
        {children}
    </Context.Provider>
    )

}


export default Context