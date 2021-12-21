import { useEffect, useState } from 'react'
import { Container } from '../../styles/herbivorous'
import CardDino from '../../components/CardDino'
import Head from 'next/head'

export default function Herbivorous() {
    const [dinos, setDinos] = useState([])

    useEffect(() => {
        fetch('/api/getDinos')
        .then(res => res.json())
        .then(data => {
            setDinos(data)
        })

    }, [])
    return (
        <>
            <Head>
                <title>Dinosaurios Hervivoros</title>
            </Head>
            <Container>
                {
                    dinos.length > 0 && dinos.map(dino => {
                        return (
                            <CardDino length={dino.length} type={dino.type} found={dino.found} name={dino.name} description={dino.description} live={dino.live} key={dino.id} url={'/'}/>
                        )
                    })
                }
                
            </Container>
        </>
    )
}
