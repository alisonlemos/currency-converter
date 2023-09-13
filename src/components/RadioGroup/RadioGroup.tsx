import { ChangeEvent } from "react"
import { RadioGroupProps } from "@/models/RadioGroup"
import { CheckMark, Container, Label, Options, Radio, Title } from "./RadioGroup.style"

export default function RadioGroup(props: RadioGroupProps) {
    const { title, options, value, onChange } = props

    function handleChange(event: ChangeEvent<HTMLInputElement>, name: string): void {
        const { target: { value } } = event
        onChange(value, name)
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Options>
                {options.map((item, index) =>
                    <Label key={index}>
                        <Radio
                            type="radio"
                            name={item.name}
                            value={item.value}
                            checked={item.value === value}
                            onChange={(event) => handleChange(event, item.name)}
                        />
                        <CheckMark />
                        <span>

                            {item.label}
                        </span>
                    </Label>
                )}
            </Options>

        </Container >
    )
}