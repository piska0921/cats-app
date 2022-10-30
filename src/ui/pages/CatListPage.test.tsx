import { render, screen } from '@testing-library/react'
import useGetCatListByGender from '../../hooks/useGetCatListByGender'
import { PetsByOwnerGender } from '../../types'
import { CatListPage } from './CatListPage'

jest.mock('../../hooks/useGetCatListByGender', () => jest.fn())

const useGetCatListByGenderMock = useGetCatListByGender as jest.MockedFunction<typeof useGetCatListByGender>

describe('PetList component', () => {
    it('should render the cat list by gender in correctly', () => {
        useGetCatListByGenderMock.mockReturnValueOnce({
            data: {
                Male: [
                    {
                        name: 'Garfield',
                        type: 'Cat'
                    }
                ],
                Female: [
                    {
                        name: 'Garfield',
                        type: 'Cat'
                    },
                    {
                        name: 'Tabby',
                        type: 'Cat'
                    }
                ]
            },
            loading: false,
            success: true,
            error: undefined,
            fetchCatList: jest.fn()
        })

        render(<CatListPage />)
        expect(screen.getByText('Male')).toBeInTheDocument()
        expect(screen.getByText('Female')).toBeInTheDocument()
        expect(screen.getAllByText('Garfield')).toHaveLength(2)
        expect(screen.getByText('Tabby')).toBeInTheDocument()
    })

    it('should display error message when there is error', () => {
        useGetCatListByGenderMock.mockReturnValueOnce({
            data: {} as PetsByOwnerGender,
            loading: false,
            success: false,
            error: new Error(),
            fetchCatList: jest.fn()
        })
        render(<CatListPage />)
        expect(screen.getByText('Something went wrong. Please try again')).toBeInTheDocument()
    })

    it('should display a spinner when loading', () => {
        useGetCatListByGenderMock.mockReturnValueOnce({
            data: {} as PetsByOwnerGender,
            loading: true,
            success: false,
            error: undefined,
            fetchCatList: jest.fn()
        })
        render(<CatListPage />)
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
    })
})
