import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
    height: 100%;
    
    @media (max-width: 700px) {
        gap: 2rem;
    }
`