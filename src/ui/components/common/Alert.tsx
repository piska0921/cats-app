import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../../styles/constants'

type AlertProps = {
    message: string
}
const AlertContainer = styled.div`
    padding: 1rem;
    margin: 1rem;
    border: 1px solid transparent;
    color: ${PRIMARY_COLOR};
    background-color: #f8d7da;
    border-color: #f5c2c7;
`
export const Alert: React.FC<AlertProps> = ({ message }) => {
    return (
        <AlertContainer role="alert" aria-live="assertive">
            {message}
        </AlertContainer>
    )
}
