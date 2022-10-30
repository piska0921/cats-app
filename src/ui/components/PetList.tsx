import styled from 'styled-components'
import { ACCENT_COLOR, BreakPoint, PRIMARY_COLOR } from '../../styles/constants'
import { Pet } from '../../types/api-response/ownersResponse'

type PetListProps = {
    title: string
    petList: Pet[]
}

const Container = styled.div`
    width: 100%;
    @media only screen and (min-width: ${BreakPoint.LARGE}) {
        width: 50%;
    }
`
const Header = styled.h1`
    color: ${ACCENT_COLOR};
`
const ListItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 1rem;
    padding: 1.5rem 1rem;
    background-color: ${PRIMARY_COLOR};
    color: #fff;
    font-size: 1.5rem;
`

export const PetList: React.FC<PetListProps> = (props: PetListProps) => {
    const { title, petList } = props
    return (
        <Container>
            <Header>{title}</Header>
            {petList.map((pet, index) => (
                <ListItem key={`${title}-${index}`}>{pet.name}</ListItem>
            ))}
        </Container>
    )
}
