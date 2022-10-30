import styled from 'styled-components'
import { ACCENT_COLOR, BreakPoint, PRIMARY_COLOR } from '../../styles/constants'
import { Pet } from '../../types/api-response/ownersResponse'

type PetListProps = {
    title: string
    petList: Pet[]
}

const Container = styled.ul`
    width: 100%;
    list-style-type: none;
    padding: 0;
    @media only screen and (min-width: ${BreakPoint.LARGE}) {
        width: 50%;
    }
`
const Header = styled.h1`
    color: ${ACCENT_COLOR};
`
const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 1rem;
    padding: 1.5rem 1rem;
    background-color: ${PRIMARY_COLOR};
    color: #fff;
    font-size: 1.5rem;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
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
