import React, { useState } from 'react'

const Context = React.createContext({})

export function CurrentContextProvider({ children }) {
    const [weather, setWeather] = useState([])
    const [weathfive, setWeathFive] = useState([])
    const [consult2, setConsult2] = useState(true)
    const [consult3, setConsult3] = useState(false)
    const [dataConsult, setDataConsult] = useState('')


    return (

        <Context.Provider value={{ weather, setWeather, consult2, setConsult2, consult3, setConsult3, dataConsult, setDataConsult, weathfive, setWeathFive }}>
            {children}
        </Context.Provider>
    )

}


export default Context