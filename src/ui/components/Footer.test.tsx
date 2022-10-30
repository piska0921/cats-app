import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component', () => {
    it('should render the component correctly', () => {
        render(<Footer />)
        expect(screen.getByText('Coding Challenge', { exact: false })).toBeInTheDocument()
    })
})
