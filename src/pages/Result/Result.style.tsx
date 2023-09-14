import styled from 'styled-components'

export const Container = styled.div`
    align-items: flex-start;
    color: var(--dark-grey);
    display: flex;
    flex-direction: column;
    font-weight: 500;
`

export const Title = styled.span`
    font-size: 18px;
    padding-top: 2rem;
`

export const Value = styled.span`
    color: var(--brand-green);
    font-size: 64px;
    padding-bottom: 1.5rem;
    word-break: break-word;
`

export const Label = styled.span`
    color: var(--medium-grey);
    tex-align: left;
    font-weight: 400;
    font-size: 14px;
    padding-bottom: 0.5rem;
    word-break: break-all;
`
