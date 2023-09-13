import { render, screen } from "@testing-library/react"
import Form from "./Form"
import { FormProps } from "@/models/Form"
import userEvent from "@testing-library/user-event"
import { calculateResult } from '@/services/currencyService'

jest.mock('@/services/currencyService')
const mockService = calculateResult as jest.MockedFunction<typeof calculateResult>

describe('Form Component', () => {

    let formProps: FormProps
    const onSubmit = jest.fn()

    beforeEach(() => {
        mockService.mockReturnValue(0)
        formProps = {
            price: '1',
            onSubmit
        }
    })

    it('updates form data when input fields change', async () => {
        const value = '50,00'
        render(<Form {...formProps} />)
        const dollarInput = screen.getByRole('textbox', { name: /dólar/i })
        await userEvent.clear(dollarInput)
        await userEvent.type(dollarInput, value)
        expect(dollarInput).toHaveValue(`$ ${value}`)
    })

    it('calls calculateResult and onSubmit when form is submitted', async () => {
        render(<Form {...formProps} />)
        const taxInput = screen.getByRole('textbox', { name: /taxa do estado/i })
        await userEvent.type(taxInput, '1')
        const button = screen.getByRole('button')
        await userEvent.click(button)

        expect(taxInput).toHaveValue('0.1%')
        expect(mockService).toHaveBeenCalled()
        expect(formProps.onSubmit).toHaveBeenCalled()
    })
})