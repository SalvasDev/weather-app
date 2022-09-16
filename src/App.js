import React, {useState} from 'react'
import styled from '@emotion/styled';
import Searchbar from './components/Searchbar';
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
      { showbar ? <Searchbar setShowbar={setShowbar} setShowaside = {setShowaside}/> : null}
       { showaside ? <Asidebar setShowbar = {setShowbar}/> : null } 
       <div className="content"> 
          <Content />
        </div>      
      
    </Container>
  );
}

export default App;
						