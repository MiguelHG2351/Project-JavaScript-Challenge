import styled from 'styled-components';

export const Container = styled.section`
    width: 85%;
    margin: 0 auto;
`

export const CardContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1260px) {
        grid-template-columns: repeat(3, 1fr);
    }
`
