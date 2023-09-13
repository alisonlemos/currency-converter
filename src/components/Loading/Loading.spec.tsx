import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Loading from './Loading'

describe('Loading component', () => {
    it('renders the loading animation', () => {
        render(<Loading />)
        const loadingElement = screen.getByTestId('loading-ring')
        expect(loadingElement).toHaveStyleRule(
            'border-color: var(--brand-green) transparent var(--brand-green) transparent'
        )
    })
})
