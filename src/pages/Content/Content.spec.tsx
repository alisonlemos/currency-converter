import { render, screen } from "@testing-library/react"
import * as ReactQuery from 'react-query'

import Content from "./Content"
import userEvent from "@testing-library/user-event"
import { calculateResult } from "@/services/currencyService"
import { FormProps } from "@/models/Form"
import { PurchaseType } from "@/models/RadioGroup"
import { ResultProps } from "../Result/Result"

jest.mock('@/services/currencyService')

const mockService = calculateResult as jest.MockedFunction<typeof calculateResult>

const mockData = {
    data: {
        value: "1.00",
        dateString: "September 12, 2023"
    }
}
jest.mock("@/components/Header/Header", () => () => <span>Header</span>)
jest.mock("@/components/Loading/Loading", () => () => <div>Loading...</div>)

jest.mock("@/pages/Form/Form", () => ({ onSubmit }: FormProps) =>
    <button onClick={() => onSubmit({
        value: 1234.56,
        formData: {
            purchaseType: PurchaseType.MONEY,
            dolar: '1',
            tax: '2'
        }
    })}>
        Submit
    </button>
)

jest.mock("@/pages/Result/Result", () => ({ onClick }: ResultProps) =>
    <button onClick={() => onClick()}>
        Back
    </button>
)

describe('Content Component', () => {

    beforeEach(() => {
        mockService.mockReturnValue(0)
        jest.spyOn(ReactQuery, 'useQuery')
            .mockImplementation(
                jest.fn()
                    .mockReturnValue({
                        data: mockData,
                        isLoading: false,
                        isSuccess: true
                    })
            )
    })

    it('renders the loading screen while fetching data  ', async () => {
        jest.spyOn(ReactQuery, 'useQuery')
            .mockImplementation(
                jest.fn()
                    .mockReturnValue({
                        data: undefined,
                        isLoading: false,
                        isSuccess: true
                    })
            )
        render(<Content />)
        const loadingElement = screen.getByText("Loading...")
        expect(loadingElement).toBeInTheDocument()
    })

    it('renders the header and form when data is available', () => {
        render(<Content />)
        const headerElement = screen.getByText('Header')
        const submitButton = screen.getByRole('button', { name: 'Submit' })
        const backButton = screen.queryByRole('button', { name: 'Back' })

        expect(headerElement).toBeInTheDocument()
        expect(submitButton).toBeInTheDocument()
        expect(backButton).not.toBeInTheDocument()
    })

    it('renders the result page when the form is submitted', async () => {
        render(<Content />)
        const submitButton = screen.getByRole('button', { name: 'Submit' })
        await userEvent.click(submitButton)
        const backButton = screen.getByRole('button', { name: 'Back' })
        expect(backButton).toBeInTheDocument()
    })

    it('renders the form page when the Back button is clicked', async () => {
        render(<Content />)
        const headerElement = screen.getByText('Header')
        const submitButton = screen.getByRole('button', { name: 'Submit' })
        await userEvent.click(submitButton)

        const backButton = screen.getByRole('button', { name: 'Back' })
        await userEvent.click(backButton)

        expect(headerElement).toBeInTheDocument()
        expect(backButton).not.toBeInTheDocument()

    })
})