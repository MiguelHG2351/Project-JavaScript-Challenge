import styled from 'styled-components';

export const Container = styled.a`
    border: 1px solid ${props => props.borderColor};
    padding: 1.5rem;
    background-image: url('https://www.slashfilm.com/img/gallery/why-was-the-triceratops-sick-in-jurassic-park/intro-1629910029.jpg');
    background-position: top left;
    background-size: cover;
    background-color: ${props => props.background};
    background-blend-mode: multiply;
    transition: transform 0.18s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`

export const HeaderCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const HeaderImage = styled.img`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    filter: drop-shadow(5px 5px 10px #000);
    
`

export const CardInfo = styled.div`
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
