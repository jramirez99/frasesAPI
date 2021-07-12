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
    // manera de hacerla comunmente y sin el async await
    // const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // const respuesta = api.then( resultado => resultado.json() );
    // respuesta.then( data => console.log(data[0]) )

    // HACERLO CON ASYNC AWAIT
    const respuesta = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const datos = await respuesta.json();
    // console.log(datos);

    // le pasamos los datos de la respuesta a la api al state, muy importante es que en este caso como es una unica posicion hay que pasarle la llaver del objeto en este caso es un 0 y se pasa entre corchetes porque es un array
    guardarFrase(datos[0]);
  };

  // recordar que es useEffect es similar a un .Ready en jquery y un DOMContenLoaded en js
  useEffect( () => {
    // una vez que cargue la pagina llamara la funcion
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
