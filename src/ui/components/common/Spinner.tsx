import styled, { keyframes } from 'styled-components'
import { ACCENT_COLOR } from '../../../styles/constants'

const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerLoader = styled.div`
    border: 10px solid #fff;
    border-top: 10px solid ${ACCENT_COLOR};
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    animation: ${SpinAnimation} 1.2s linear infinite;
`

export const Spinner: React.FC = () => {
    return <SpinnerLoader data-testid="loading-spinner" />
}
