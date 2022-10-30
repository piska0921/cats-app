/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import styled from 'styled-components'
import useGetCatListByGender from '../../hooks/useGetCatListByGender'
import Alert from '../components/common/Alert'
import { Spinner } from '../components/common/Spinner'
import PetList from '../components/PetList'

type ContainerProps = {
    $loading: boolean
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: ${(props) => (props.$loading ? '100vh' : 'auto')};
`

export const CatListPage: React.FC = () => {
    const { data, success, loading, error, fetchCatList } = useGetCatListByGender()

    useEffect(() => {
        fetchCatList()
    }, [])

    return (
        <Container $loading={loading}>
            {loading && <Spinner />}
            {error && <Alert message="Something went wrong. Please try again" />}
            {success &&
                Object.entries(data).map(([gender, catList], index) => (
                    <PetList key={`${gender}-${index}`} title={gender} petList={catList} />
                ))}
        </Container>
    )
}
