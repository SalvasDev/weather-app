import React from 'react'
import styled from '@emotion/styled';
import Asidebar from './components/Asidebar';
import Content from './components/Content';


const Container = styled.div`
  display: grid;
  grid-template-columns: 459px 1fr;   

`;

function App() {
  return (
    <Container >
       <Asidebar/>
       <div className="content"> 
          <Content />
        </div>      
      
    </Container>
  );
}

export default App;
						