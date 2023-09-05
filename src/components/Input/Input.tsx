import { useEffect, ChangeEvent } from "react"
import { Container, InputField, Label } from "./Input.style"
import { FormatStyle, useMask } from "@/hooks/useMask"

export interface InputProps {
    name: string,
    title: string,
    value: string,
    placeholder: string,
    formatStyle?: FormatStyle,
    onChange: (value: string) => void
}

export default function Input(props: InputProps) {
    const { name, title, value, placeholder, formatStyle, onChange, } = props
    const { maskedValue, onValueChange } = useMask(value, formatStyle)

    useEffect(() => {
        onChange(maskedValue)
    }, [maskedValue, onChange])

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { target: { value } } = event
        onValueChange(value)
    }

    return (
        <Container>
            <Label htmlFor={name}>{title}</Label>
            <InputField
                id={name}
                name={name}
                value={maskedValue}
                placeholder={placeholder}
                type="text"
                onChange={handleChange}
            />
        </Container>
    )
}