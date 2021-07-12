import { useEffect, useState } from 'react';
import Frase from './components/Frase';

import styled from '@emotion/styled';

import './index.css';

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 30rem;
  border: 2px solid black;
  color: white;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  margin-top: 3rem;
  padding: 1rem 3rem;
`;


function App() {

  const [frase, guardarFrase] = useState({});

  
  const consultarApi = async () => {

    const respuesta = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const datos = await respuesta.json();
    // console.log(datos);

    guardarFrase(datos[0]);
  };

  useEffect( () => {
    consultarApi();
  }, [])

  return (
    <Contenedor>

      <Frase
        frase={frase}
      />

      <Boton
        onClick={consultarApi}
      >
        Buscar frase
      </Boton>
    </Contenedor>
  );
};

export default App;
