import styled from 'styled-components'

export const FormElement = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (max-width: 500px) {
        gap: 1rem;
    }
`

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    @media (max-width: 500px) {
        flex-direction: column;
        gap: 1rem;
    }
`