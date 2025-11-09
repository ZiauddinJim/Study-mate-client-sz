import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Root from './Routes/Root'
import AuthProvider from './Context/AuthProvider'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Root} />
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
    </AuthProvider>
  </StrictMode>,
)
