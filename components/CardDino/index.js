import { Container, HeaderCard, CardInfo, CardDescription, HeaderImage, CardContent } from './style'
import Link from 'next/link'
import { Divider } from '@mui/material'

export default function CardDino({ name, live, image, url, description, found, length, type }) {
    return (
        <>
            <Link href={url}>
                <Container borderColor='blue'>
                    <HeaderCard>
                        <CardInfo align="center">
                            <HeaderImage src={image} 
                            alt="user-avatar"
                            />
                            <CardDescription align="center">
                                <h3>{name}</h3>
                                <p>{live}</p>
                            </CardDescription>
                        </CardInfo>
                    </HeaderCard>
                    <CardContent>
                        <p title={description}>{
                            // cut texto to 100 characters
                            description.length > 100 ? description.substring(0, 100) + '...' : description
                        }</p>
                        <Divider />
                        <div className="location">
                            <h4>Lugar encontrado:</h4>
                            <p>{found}</p>
                        </div>
                        <div className="extra">
                            <h4>Tamaño:</h4>
                            <p>{length}</p>
                        </div>
                        <div className="extra-2">
                            <h4>Tipo:</h4>
                            <p>{type}</p>
                        </div>
                    </CardContent>
                </Container>
            </Link>
        </>
    )
}