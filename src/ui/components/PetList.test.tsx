import { render, screen } from '@testing-library/react'
import PetList from './PetList'

describe('PetList component', () => {
    it('should render the component with data passed in correctly', () => {
        const mockProps = {
            title: 'title-test',
            petList: [
                { name: 'name1', type: 'Cat' },
                { name: 'name2', type: 'Cat' }
            ]
        }
        render(<PetList {...mockProps} />)
        expect(screen.getByText('title-test')).toBeInTheDocument()
        expect(screen.getByText('name1')).toBeInTheDocument()
        expect(screen.getByText('name2')).toBeInTheDocument()
    })
})
