import styled from 'styled-components'

export const DualRing = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid var(--brand-green);
        border-color: var(--brand-green) transparent var(--brand-green) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`