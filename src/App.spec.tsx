import { render, screen, } from '@testing-library/react'
import App from './App'

jest.mock('react-query', () => {
    return {
        QueryClient: jest.fn().mockResolvedValue(''),
        QueryClientProvider: ({ children }: { children: JSX.Element }) =>
            <>{children}</>
    }
})
jest.mock('@/pages/Content/Content', () => () => <span>Content</span>)

describe('App Component', () => {

    it('renders the Content component', () => {
        render(<App />)
        const contentElement = screen.getByText('Content')
        expect(contentElement).toBeInTheDocument()
    })
})

