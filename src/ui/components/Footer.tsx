import styled from 'styled-components'

const FooterContainer = styled.div`
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: #1a1a1a;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
`
const Footer = () => (
    <FooterContainer>
        <p>Coding Challenge &copy; Scarlett P 2022</p>
    </FooterContainer>
)

export default Footer
