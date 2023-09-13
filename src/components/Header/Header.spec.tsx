import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {

    it('renders the title when provided', () => {
        const title = 'Currency Exchange'
        render(<Header title={title} />)
        const titleElement = screen.getByText(title)
        expect(titleElement).toBeInTheDocument()
    })

    it('renders the default title when not provided', () => {
        render(<Header />)
        const defaultTitleElement = screen.getByText('Dados de câmbio disponibilizados pela Morningstar.')
        expect(defaultTitleElement).toBeInTheDocument()
    })
})
