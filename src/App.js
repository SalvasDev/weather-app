import React, {useState} from 'react'
import styled from '@emotion/styled';
import Searchbar from './components/Searchbar';
import { CurrentContextProvider } from './components/context/CurrentContext';
import { LocContextProvider } from './components/context/LocContext';
import { TypeWContextProvider } from './components/context/TypeWeContext';
import Asidebar from './components/Asidebar';
import Content from './components/Content';


const Container = styled.div`
  display: grid;
  grid-template-columns: 459px 1fr; 
  
  @media (max-width: 510px) {
    display: flex;
    flex-direction: column;
    column-gap: 2rem;
  }
`;




function App() {

  const [ showbar, setShowbar ] = useState(false)
  const [ showaside, setShowaside ] = useState(true)    

  function handleForce(){
   window.location.reload()
}

  return (
    <Container >
      <CurrentContextProvider>
        <LocContextProvider>
          <TypeWContextProvider>
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
          handleForce = {handleForce}
           />
           : null } 
       <div className="content"> 
            <Content />    
        </div>
          </TypeWContextProvider>
        </LocContextProvider>     
      </CurrentContextProvider>
    </Container>
  );
}

export default App;




