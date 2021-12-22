import styled from 'styled-components';

export const Container = styled.a`
    border: 1px solid ${props => props.borderColor};
    background-image: url('https://www.slashfilm.com/img/gallery/why-was-the-triceratops-sick-in-jurassic-park/intro-1629910029.jpg');
    background-position: top left;
    background-size: cover;
    background-color: #25a08d;
    background-blend-mode: multiply;
    transition: transform 0.18s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`

export const HeaderCard = styled.div`
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const HeaderImage = styled.img`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(5px 5px 10px #000);
    
`

export const CardInfo = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardDescription = styled.div`
    text-align: center;
    & > * {
        margin: 0;
    }
`

export const CardContent = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(179deg, #0e5b5e, transparent);
    
    & .location {
        display: flex;
        align-items: center;
        gap: 0 .5rem;
        background-image: linear-gradient(90deg,#1e286d,#092981c2);
        padding: .25rem;
        border-radius: .5rem;
        & p, h4 {
            margin: .25rem;
        }
    }
    
    & .extra, .extra-2 {
        display: flex;
        align-items: center;
        gap: 0 .5rem;
    }
`
