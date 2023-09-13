import styled, { css } from 'styled-components'

export const ButtonElement = styled.button<{ $primary?: boolean; $disabled?: boolean }>`
    align-items: center;    
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid var(--medium-grey3);
    box-shadow: 0px 10px 4px 0px var(--medium-grey3);
    color: var(--dark-grey);
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    font-weight: 600;
    font-size: 16px;
    width: 149px;
    height: 56px;

    @media (max-width: 400px) {
        justify-content: center;
        gap: 1rem;
        width: 100%;
    }

    svg {
        color:var(--medium-grey);
    }

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 1;
        background: var(--medium-grey3);
    }

    ${props => props.$disabled && css`
        cursor: not-allowed;
        background: lightgrey;
        opacity: 0.7;
        &:hover, &:active {
            background: lightgrey;
            opacity: 0.7;
        }
    `}

    ${props => props.$primary && css`
        background: var(--brand-green);
        border: 1px solid var(--primary);
        color: #ffffff;

        svg {
            color: #ffffff;
        }
        
        &:active {
            opacity: 1;
            background: var(--primary);
        }
  `}

  ${props => props.$primary && props.$disabled && css`
    background: var(--medium-grey);
    &:hover, &:active {
        opacity: 0.7;
        background: var(--medium-grey);
    }
`}
`