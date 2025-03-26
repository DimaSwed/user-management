import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StoreProvider from '@/app/providers/provider-store'
import App from '@/app/App'
import '@/app/styles/reset.sass'
import '@/app/styles/index.sass'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
)
