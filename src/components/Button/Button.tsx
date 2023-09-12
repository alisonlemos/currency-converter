import { ButtonProps } from "@/models/Button"
import { ButtonElement } from "./Button.style"

export default function Button(props: ButtonProps) {
    const { children, primary, disabled, onClick } = props

    function handleClick(): void {
        if (onClick) {
            onClick()
        }
    }

    return (
        <ButtonElement
            $primary={primary}
            $disabled={disabled}
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </ButtonElement>
    )
}