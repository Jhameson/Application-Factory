import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;

`;

export const Head = styled.header`

    display: flex;
    width: 100%;
    height: 70px;
    background-color: brown;
    justify-content: center;
    align-items: center;

    a{
        font-size: 40px;
        color: #fff;
    }
`;

export const BemVindo = styled.h1`
//ficar atento ao template literals
font-size: ${props => `${props.tamanho}px`}; //forma dinamica
color: ${props => `#${props.cor}`}; //forma dinamica

`;

/*
    html{
    font-family: sans-serif;
}

.container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
}

.header{
    display: flex;
    width: 100%;
    height: 70px;
    background-color: brown;
    justify-content: center;
    align-items: center;
}
.titulo{
    font-size: 40px;
    color: #fff;
}

*/