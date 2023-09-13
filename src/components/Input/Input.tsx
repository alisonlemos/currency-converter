import { useEffect, ChangeEvent, KeyboardEvent } from "react"
import { Container, InputField, Label } from "./Input.style"
import { FormatStyle, useMask } from "@/hooks/useMask"

export interface InputProps {
    name: string,
    title: string,
    value: string,
    placeholder: string,
    formatStyle?: FormatStyle,
    onChange: (value: string, field: string) => void,
}

export default function Input(props: InputProps) {
    const { name, title, value, placeholder, formatStyle, onChange } = props
    const { maskedValue, onValueChange } = useMask(value, formatStyle)

    useEffect(() => {
        onChange(maskedValue, name)
    }, [maskedValue, name, onChange])

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { target: { value } } = event
        onValueChange(value)
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
        if (formatStyle === FormatStyle.PERCENT && event.code === "Backspace") {
            event.preventDefault()
            const newValue = value.substring(0, value.length - 2)
            onValueChange(newValue)
        }
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
                onKeyDown={handleKeyDown}
            />
        </Container>
    )
}