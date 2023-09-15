import { QueryClientProvider } from "@tanstack/react-query"
import Root from "./views/root/Root"
import { queryClient } from './common/queryClient'
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator"
import React from "react"
import BootstrapProvider from "./components/BootstrapProvider/BootstrapProvider"

function App() {
  return (
    <React.Suspense fallback={<LoadingIndicator />}>
      <QueryClientProvider client={queryClient}>
        <BootstrapProvider>
          <Root />
        </BootstrapProvider>
      </QueryClientProvider>
    </React.Suspense>
  )
}

export default App
