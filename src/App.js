import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled';
import Searchbar from './components/Searchbar';
// import { useCities } from './components/hooks/useCities';
import { CurrentContextProvider } from './components/context/CurrentContext';
import { LocContextProvider } from './components/context/LocContext';
import Asidebar from './components/Asidebar';
import Content from './components/Content';


const Container = styled.div`
  display: grid;
  grid-template-columns: 459px 1fr;   

`;


function App() {

    const [ showbar, setShowbar ] = useState(false)
    const [ showaside, setShowaside ] = useState(true)    
    

  return (
    <Container >
      <CurrentContextProvider>
        <LocContextProvider>
      { showbar ? 
      <Searchbar 
        setShowbar={setShowbar}
        setShowaside = {setShowaside}
        /> : null}
        
       { showaside ?
        <Asidebar
          setShowbar = {setShowbar}
          showaside = {showaside}
          setShowaside = {setShowaside}
           />
           : null } 
       <div className="content"> 
          <Content />
        </div>
        </LocContextProvider>     
      </CurrentContextProvider>
    </Container>
  );
}

export default App;




// Consigue el clima de los 5 dias
// useEffect(() => {

//       const getCities =  async (dataConsult, consult2, setConsult2) => {

//       if (consult2) {
//         const key = '682500PcukwQUtq1UDd6XimUfAmBA5HL'
//         const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
//         const query = `${dataConsult}?apikey=${key}`

//         const response = await fetch(base + query)
//         const data = await response.json()

//         setConsult2(false)  
//         console.log(data.DailyForecasts)
//         return data.DailyForecasts       
//       } 
//   }
//     getCities(dataConsult, consult2, setConsult2).then(paises => {setCities(paises)})
//   },[consult2])