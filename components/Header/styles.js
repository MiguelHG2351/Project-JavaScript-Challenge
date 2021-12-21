import styled from 'styled-components';

export const Header = styled.header`
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: var(--background-header);
    border-bottom: 1px solid rgba(255, 255, 255, .3);
    box-shadow: 0 1px 16px 14px rgb(2 143 210 / 25%);
    `

export const HeaderContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 0 20px;
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 0 20px;
    
    path {
        color: var(--blue-text);
    }

    button img {
        height: 52px;
        width: 52px;
        object-fit: cover;
    }
`
