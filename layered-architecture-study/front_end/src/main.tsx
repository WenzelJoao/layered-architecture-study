import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Main from './layouts/Main'
import ErrorPage from './pages/ErrorPage.jsx'
import { RouterProvider } from "react-router/dom";
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext.jsx'
import Cadastro from './pages/Cadastro/index.js'

const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      
      { 
        path: "/", element: <Login /> 
      },
       { 
        path: "/cadastro", element: <Cadastro />
      },
    ]
  }    
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
