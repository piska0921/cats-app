import { render, screen } from '@testing-library/react'
import Alert from './Alert'

describe('Alert component', () => {
    it('should render the component with message correctly', () => {
        render(<Alert message="test" />)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
})
