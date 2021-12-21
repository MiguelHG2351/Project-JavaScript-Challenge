import Head from 'next/head'
import { Container, CardContainer } from 'styles/Home'
import Card from 'components/Cards'

export default function Home() {


    return <>
        <Head>
            <title>Home</title>
        </Head>
        <Container>
            <h2>JavaScript challenge</h2>
            <CardContainer>
                <Card background='#25a08d' type='Herbívoro' />
                <Card background='#07739a' type='Omnivoro'/>
                <Card background='#95440c' type='Carnivoro'/>
            </CardContainer>
        </Container>
    </>
}