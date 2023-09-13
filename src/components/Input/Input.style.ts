import styled from 'styled-components'

export const Container = styled.div`
    color: var(--dark-grey);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Label = styled.label`
    font-size: 18px;
    font-weight: 500;
`
export const InputField = styled.input`
    border-radius: 4px;
    border: 1px solid var(--medium-grey3);
    box-sizing: border-box;
    box-shadow: 0px 10px 4px 0px var(--medium-grey3);
    color: var(--dark-grey);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    padding: 16px;
    width: 166px;
    height: 54px;
    &::placeholder{
        color: var(--medium-grey);
        font-weight: 400;
    }
    &:focus-visible {
        outline: solid 1px var(--medium-grey);
    }
    @media (max-width: 400px) {
        width: 100%;
    }
`