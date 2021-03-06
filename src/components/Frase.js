import styled from '@emotion/styled';

const Contenedor = styled.div`
    background-color: white;
    border-radius: 0%.5rem;
    padding: 3rem;
    max-width: 80rem;

    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            position: absolute;
            font-size: 10rem;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        color: #666;
        text-align: right;
        font-weight: bold;
        margin-top: 1rem;
    }

`;

const Frase = ( { frase } ) => {

    // if ( Object.keys(frase).length === 0 ) return null;

    // destructuring a la respuesta de la api
    const { author, quote } = frase;

    return (  
        <Contenedor>
            <h1> { quote } </h1>
            <p> - { author } </p>
        </Contenedor>
    );
}

export default Frase;