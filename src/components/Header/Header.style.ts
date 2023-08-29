import styled from 'styled-components'

export const Container = styled.div`
    color: #000000;
    display: flex;
    flex-direction: row;
    gap: 2rem;
`

export const Logo = styled.img`
    width: 163px;
    height: 81px;
`

export const Description = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

export const Title = styled.span`
    color: var(--dark-grey2);
    font-weight: 500;
    font-size: 18px;
`

export const SubTitle = styled.span`
    color: var(--medium-grey);
    font-weight: 400;
    font-size: 14px;
`