import React, { useEffect, useState } from 'react'
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
  const [showbar, setShowbar] = useState(false);
  const [showaside, setShowaside] = useState(true);
  const [coordenades, setCoordenades] = useState({});

  function handleForce() {
    window.location.reload();
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          const coords = {
            lat: latitude,
            lng: longitude,
          };
          setCoordenades(coords);
        },
        () => {
          alert('Unable to retrieve location. Default location will be used.');
          // Aquí puedes establecer las coordenadas predeterminadas si no se pueden obtener las coordenadas del usuario.
          const defaultCoords = {
            lat: 0,
            lng: 0,
          };
          setCoordenades(defaultCoords);
        }
      );
    } else {
      alert('Your browser does not have a geolocation option');
      throw new Error('Your browser does not have a geolocation option');
    }
  }, []);

  return (
    <Container>
      <CurrentContextProvider>
        <LocContextProvider>
          <TypeWContextProvider>
            {showbar && (
              <Searchbar setShowbar={setShowbar} setShowaside={setShowaside} />
            )}

            {coordenades && Object.keys(coordenades).length > 0 && (
              <Asidebar
                setShowbar={setShowbar}
                showaside={showaside}
                setShowaside={setShowaside}
                handleForce={handleForce}
                coordenades={coordenades}
              />
            )}

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




