import { QueryClient, QueryClientProvider } from 'react-query'
import Content from './pages/Content/Content'
import './App.css'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30000,
      },
    }
  })


  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  )
}

export default App
