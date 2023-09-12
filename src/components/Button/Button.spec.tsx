import { render, screen } from "@testing-library/react"
import { ButtonProps } from "@/models/Button"
import userEvent from "@testing-library/user-event"
import 'jest-styled-components'
import Button from "./Button"

describe('Button Component', () => {

    let buttonProps: ButtonProps
    const onClick = jest.fn()

    beforeEach(() => {
        buttonProps = {
            children: "Ok",
            primary: true,
            disabled: false,
            onClick
        }
    })

    it('renders children correctly', () => {
        render(<Button {...buttonProps} />)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })

    it('calls onClick when button is clicked', async () => {
        render(<Button {...buttonProps} />)
        const buttonElement = screen.getByRole('button')
        await userEvent.click(buttonElement)
        expect(buttonProps.onClick).toHaveBeenCalled()
    })

    it('renders as primary when primary prop is true', () => {
        render(<Button {...buttonProps} />)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toHaveStyleRule('background', 'var(--brand-green)')
    })

    it('renders as disabled when disabled prop is true', () => {
        render(<Button {...buttonProps} disabled={true} />)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toHaveAttribute('disabled')
    })

    it('does not call onClick when disabled prop is true', async () => {
        render(<Button {...buttonProps} disabled={true} />)
        const buttonElement = screen.getByRole('button')
        await userEvent.click(buttonElement)
        expect(buttonProps.onClick).not.toHaveBeenCalled()
    })

})