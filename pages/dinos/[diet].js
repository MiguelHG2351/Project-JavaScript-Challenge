import { Container } from '../../styles/herbivorous'
import CardDino from '../../components/CardDino'
import CardDinoSkeleton from '../../components/CardDinoSkeleton'
import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'
import useIntersectionObserver from 'hooks/useIntersectionObserver'


    const GET_DINOS = gql`
        query PaginationDino($offset: Int, $limit: Int, $diet: String) {
            allTypeDino(offset: $offset, limit: $limit, diet: $diet) {
                id
                name,
                description,
                image,
                diet,
                live,
                found,
                type,
                length
            }
        }
`

function Herbivorous() {
    const router = useRouter()
    const diet = router.query.diet
    const [ref, isNearScreen] = useIntersectionObserver({
        distance: '50px',
    })

    const { loading, data, fetchMore } = useQuery(GET_DINOS, {
        variables: {
            offset: 0,
            limit: 10,
            diet
        }
    })
    console.log(data)
    useEffect(() => {
        if(!isNearScreen) return;
        fetchMore({
            variables: {
                offset: data.allDinos.length
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if(!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    allDinos: [...prev.allDinos, ...fetchMoreResult.allDinos]
                })
            }
        })
    }, [isNearScreen])

    console.log(data)
    return (
        <>
            <Head>
                <title>Dinosaurios Hervivoros</title>
            </Head>
            <Container>
                {
                    !loading ? (
                        data.allTypeDino.map(dino => {
                            return (
                                <CardDino length={dino.length} type={dino.type} image={dino.image} found={dino.found} name={dino.name} description={dino.description} live={dino.live} key={dino.id} url={'/'}/>
                            )
                        })
                    ) : (
                            Array(10).fill(0).map((_, index) => (
                                <CardDinoSkeleton key={index} />
                            ))
                        )
                }
                <div ref={ref}></div>
                
            </Container>
        </>
    )
}

export default Herbivorous
