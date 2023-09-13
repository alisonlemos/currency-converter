import { render, screen } from "@testing-library/react"
import Result, { ResultProps } from "./Result"
import { PurchaseType } from "@/models/RadioGroup"
import userEvent from "@testing-library/user-event"

describe('Result Component', () => {
    let resultProps: ResultProps
    const onClick = jest.fn()

    beforeEach(() => {
        resultProps = {
            onClick,
            price: "1.00",
            value: 1234.56,
            formData: {
                purchaseType: PurchaseType.MONEY,
                tax: "2.0%",
                dolar: '3'
            },
        }
    })


    it('renders the result value in currency format', () => {
        render(<Result {...resultProps} />)
        const resultValue = screen.getByText("R$ 1.234,56")
        expect(resultValue).toBeInTheDocument()
    })

    it('renders the purchase type correctly for money purchase type', () => {
        render(<Result {...resultProps} />)
        const purchaseType = screen.getByText(/compra no dinheiro e taxa de/i)
        expect(purchaseType).toBeInTheDocument()
    })

    it('renders the purchase type correctly for credt card purchase type', () => {
        const creditForm = {
            ...resultProps.formData,
            purchaseType: PurchaseType.CREDIT_CARD
        }
        render(<Result {...resultProps} formData={creditForm} />)
        const purchaseType = screen.getByText(/compra no cartão e taxa de/i)
        expect(purchaseType).toBeInTheDocument()
    })

    it('renders the tax information correctly', () => {
        render(<Result {...resultProps} />)
        const taxInfo = screen.getByText(/2\.0%/i)
        expect(taxInfo).toBeInTheDocument()
    })

    it('renders the dollar exchange rate information correctly', () => {
        render(<Result {...resultProps} />)
        const exchangeRateInfo = screen.getByText(/\$ 1,00 = r\$ 1,00/i)
        expect(exchangeRateInfo).toBeInTheDocument()
    })

    it('calls the onClick function when Back button is clicked', async () => {
        render(<Result {...resultProps} />)
        const backButton = screen.getByRole('button')
        await userEvent.click(backButton)
        expect(resultProps.onClick).toHaveBeenCalled()
    })
})