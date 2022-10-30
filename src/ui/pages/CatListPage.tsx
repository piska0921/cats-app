import { useEffect } from 'react'
import styled from 'styled-components'
import { useGetCatListByGender } from '../../hooks/useGetCatListByGender'
import { PetList } from '../components/PetList'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CatListPage: React.FC = () => {
    const { data, success, loading, error, fetchCatList } = useGetCatListByGender()

    useEffect(() => {
        fetchCatList()
    }, [])

    return (
        <Container>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {success && Object.entries(data).map(([gender, catList]) => <PetList title={gender} petList={catList} />)}
        </Container>
    )
}
