import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:#17202A ;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Titulo = styled.h1`
    padding: 25px;
    color: aliceblue;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`

export const Content = styled.div`
    background-color: #FAFAFA ;
    width: 500px;
    min-width: 300px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
