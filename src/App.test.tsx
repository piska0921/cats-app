import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders footer', () => {
    render(<App />)
    expect(screen.getByText('Coding Challenge', { exact: false })).toBeInTheDocument()
})
