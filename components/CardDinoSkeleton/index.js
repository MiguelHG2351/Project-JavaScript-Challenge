import { Skeleton } from "@mui/material"
import styled from "styled-components"

const Container = styled.div`
    border: 1px solid #e0e0e0;
    padding: .5rem;
`

const HeaderCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

const ContentCard = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default function CardSkeleton() {
    return (
        <Container>
            <HeaderCard>
                <Skeleton sx={{ bgcolor: '#0a2559' }} variant='circular' width={80} height={80} />
                <Skeleton sx={{ bgcolor: '#0a2559' }} variant='text' width={180} />
                <Skeleton sx={{ bgcolor: '#0a2559' }} variant='text' width={120} />
            </HeaderCard>
            <ContentCard>
                <Skeleton sx={{ bgcolor: '#0a2559' }} variant='text' width={150} />
                <Skeleton sx={{ bgcolor: '#0a2559' }} variant='rectangular' width={100} />
                <Skeleton sx={{ bgcolor: '#0a2559' }} variant='text' width={80} />
                <Skeleton sx={{ bgcolor: '#0a2559' }} variant='text' width={80}/>
            </ContentCard>
        </Container>
    )
}