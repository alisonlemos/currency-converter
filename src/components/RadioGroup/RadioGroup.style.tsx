import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    align-items: flex-start;
    color: var(--dark-grey);
    display: flex;
    flex-direction: column;
    font-weight: 500;
`
export const Title = styled.span`
    font-size: 18px;
    padding-bottom: 16px;
`
export const Options = styled.div`
    display: flex;
    flex-direction: row;
`
export const Label = styled.label`
    align-items: center;
    display: flex;
    gap: 0.5rem;
    margin-right: 1rem;
    font-size: 16px;
`

export const CheckMark = styled.span`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid var(--medium-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
        content: "";
        display: none;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--primary);
    }
`

export const Radio = styled.input`
    position: absolute;   
    opacity: 0;
    cursor: pointer;
    &:checked {
        & ~ ${CheckMark} {
            border: 2px solid var(--primary);
            &:after {
                display: block;
            }
        }
    }
`
