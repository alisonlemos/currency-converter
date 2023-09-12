import { render, screen } from "@testing-library/react"
import { PurchaseType, RadioGroupProps, radioOptions } from "@/models/RadioGroup"
import RadioGroup from "./RadioGroup"
import userEvent from "@testing-library/user-event"



describe('RadioGroup Component', () => {
    let radioProps: RadioGroupProps
    const onChange = jest.fn()

    beforeEach(() => {
        radioProps = {
            title: 'title',
            options: radioOptions,
            value: PurchaseType.MONEY,
            onChange
        }
    })

    it('renders title correctly', () => {
        render(<RadioGroup {...radioProps} />)
        const titleElement = screen.getByText(radioProps.title)
        expect(titleElement).toBeInTheDocument()
    })

    it('renders options correctly', () => {
        render(<RadioGroup {...radioProps} />)
        const option1 = screen.getByLabelText(radioProps.options[0].label)
        const option2 = screen.getByLabelText(radioProps.options[1].label)
        expect(option1).toBeInTheDocument()
        expect(option2).toBeInTheDocument()
    })

    it('calls onChange when an option is selected', async () => {
        render(<RadioGroup {...radioProps} />)
        const option2 = screen.getByLabelText(radioProps.options[1].label)
        await userEvent.click(option2)
        expect(radioProps.onChange).toHaveBeenCalledWith(
            radioProps.options[1].value,
            radioProps.options[1].name
        )
    })
    it('checks the correct option based on value prop', () => {
        render(<RadioGroup {...radioProps} />)
        const option1 = screen.getByLabelText(radioProps.options[0].label)
        const option2 = screen.getByLabelText(radioProps.options[1].label)

        expect(option1).toBeChecked()
        expect(option2).not.toBeChecked()
    })
})