export interface ButtonProps {
    children: JSX.Element | string,
    onClick?: () => void,
    disabled?: boolean,
    type?: string,
    primary?: boolean
}