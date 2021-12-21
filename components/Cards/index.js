import { Container, HeaderCard, CardInfo, CardDescription, HeaderImage } from './style'

export default function Card({ type, background }) {
    return (
        <Container borderColor='blue' background={background}>
            <HeaderCard>
                <CardInfo align="center">
                    <HeaderImage width={128} src="https://www.twilight-zone.nl/WebRoot/Pins/Shops/Twilightzone/5DE8/E6F3/CC18/351A/F99E/0A0C/05BA/7B40/P1SLMCJP02_01.jpg" 
                    alt="user-avatar"
                    />
                    <CardDescription align="center">
                        <h3>{type}</h3>
                        <p>Todos los periodos</p>
                    </CardDescription>
                </CardInfo>
            </HeaderCard>
        </Container>
    )
}